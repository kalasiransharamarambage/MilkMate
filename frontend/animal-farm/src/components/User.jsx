import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Select, InputLabel, FormControl, Container, Paper } from '@mui/material';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const User = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('/api/CAnimal');
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  const handleAnimalChange = (e) => {
    setSelectedAnimal(e.target.value);
    setSelectedAgeGroup('');
  };

  const handleAgeGroupChange = (e) => {
    setSelectedAgeGroup(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    const animal = animals.find((animal) => animal._id === selectedAnimal);
    const ageGroup = animal.ageGroups.find((group) => group.age === selectedAgeGroup);
    const totalCost = quantity * (ageGroup.medicineCost + ageGroup.healthCost);
    const totalSqft = ageGroup.sqft * quantity;
    setResult({ animal, ageGroup, quantity, totalCost, totalSqft });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Add logo if you have one
    // const logo = 'data:image/jpeg;base64,...'; // Add your logo in base64 format
    // doc.addImage(logo, 'JPEG', 10, 10, 50, 20);
  
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.text('Animal Report', 10, 30);
  
    doc.setFontSize(16);
    doc.setTextColor(70);
    doc.text(`Animal: ${result.animal.name}`, 10, 50);
  
    const descriptionLines = doc.splitTextToSize(result.animal.description, 180); // Split text to fit within page width
    doc.text('Description:', 10, 60);
    doc.text(descriptionLines, 10, 70);
  
    doc.text(`Cost (LKR): ${result.animal.cost}`, 10, 90);
  
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Age Group Details', 10, 110);
  
    doc.setFontSize(14);
    doc.setTextColor(50);
    doc.text(`Age Group: ${result.ageGroup.age}`, 10, 130);
    doc.text(`Medicine Cost per unit: ${result.ageGroup.medicineCost} LKR`, 10, 140);
    doc.text(`Health Cost per unit: ${result.ageGroup.healthCost} LKR`, 10, 150);
    doc.text(`Sqft per unit: ${result.ageGroup.sqft} sqft`, 10, 160);
  
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Summary', 10, 180);
  
    doc.setFontSize(14);
    doc.setTextColor(50);
    doc.text(`Total Quantity: ${result.quantity}`, 10, 200);
    doc.text(`Total Cost: ${result.totalCost} LKR`, 10, 210);
    doc.text(`Total Sqft: ${result.totalSqft} sqft`, 10, 220);
  
    doc.save('report.pdf');
  };
  

  return (
    <Container component="main" maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Choose Animal
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Animal</InputLabel>
              <Select value={selectedAnimal} onChange={handleAnimalChange}>
                {animals.map((animal) => (
                  <MenuItem key={animal._id} value={animal._id}>{animal.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {selectedAnimal && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Age Group</InputLabel>
                <Select value={selectedAgeGroup} onChange={handleAgeGroupChange}>
                  {animals.find((animal) => animal._id === selectedAnimal).ageGroups.map((group, index) => (
                    <MenuItem key={index} value={group.age}>{group.age}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField label="Quantity" type="number" value={quantity} onChange={handleQuantityChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              Calculate
            </Button>
          </Grid>
          {result && (
            <>
              <Grid item xs={12}>
                <Typography variant="h6">Report</Typography>
                <Typography variant="body1">Animal: {result.animal.name}</Typography>
                <Typography variant="body1">Description: {result.animal.description}</Typography>
                <Typography variant="body1">Cost (LKR): {result.animal.cost}</Typography>
                <Typography variant="body1">Age Group: {result.ageGroup.age}</Typography>
                <Typography variant="body1">Medicine Cost per unit: {result.ageGroup.medicineCost} LKR</Typography>
                <Typography variant="body1">Health Cost per unit: {result.ageGroup.healthCost} LKR</Typography>
                <Typography variant="body1">Sqft per unit: {result.ageGroup.sqft} sqft</Typography>
                <Typography variant="body1">Total Quantity: {result.quantity}</Typography>
                <Typography variant="body1">Total Cost: {result.totalCost} LKR</Typography>
                <Typography variant="body1">Total Sqft: {result.totalSqft} sqft</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={generatePDF}>
                  Generate PDF
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default User;
