// src/components/User.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const User = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('/api/animals');
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
    setResult({ totalCost, sqft: ageGroup.sqft * quantity });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Choose Animal</Typography>
      </Grid>
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
        <Button variant="contained" onClick={handleSubmit}>Calculate</Button>
      </Grid>
      {result && (
        <Grid item xs={12}>
          <Typography variant="h6">Total Cost: {result.totalCost}</Typography>
          <Typography variant="h6">Total Sqft: {result.sqft}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default User;
