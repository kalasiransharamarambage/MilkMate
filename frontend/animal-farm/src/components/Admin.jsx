import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container, Paper, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AddCircle, RemoveCircle, Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

const Admin = () => {
  const [animalData, setAnimalData] = useState({
    name: '',
    description: '',
    cost: '',
    ageGroups: [],
  });
  const [animals, setAnimals] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentAnimalId, setCurrentAnimalId] = useState(null);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get('/api/CAnimal');
      setAnimals(response.data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  };

  const handleAddAgeGroup = () => {
    setAnimalData({
      ...animalData,
      ageGroups: [...animalData.ageGroups, { age: '', medicineCost: '', healthCost: '', sqft: '' }]
    });
  };

  const handleRemoveAgeGroup = (index) => {
    const ageGroups = [...animalData.ageGroups];
    ageGroups.splice(index, 1);
    setAnimalData({ ...animalData, ageGroups });
  };

  const handleAgeGroupChange = (index, e) => {
    const { name, value } = e.target;
    const ageGroups = [...animalData.ageGroups];
    ageGroups[index] = { ...ageGroups[index], [name]: value };
    setAnimalData({ ...animalData, ageGroups });
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await axios.put(`/api/CAnimal/${currentAnimalId}`, animalData);
      } else {
        await axios.post('/api/CAnimal', animalData);
      }
      setAnimalData({ name: '', description: '', cost: '', ageGroups: [] });
      setEditing(false);
      setCurrentAnimalId(null);
      fetchAnimals();
    } catch (error) {
      console.error('Error saving animal:', error.response?.data?.message || error.message);
    }
  };

  const handleEdit = (animal) => {
    setAnimalData(animal);
    setEditing(true);
    setCurrentAnimalId(animal._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/CAnimal/${id}`);
      fetchAnimals();
    } catch (error) {
      console.error('Error deleting animal:', error);
    }
  };

  return (
    <Container component="main" maxWidth="LG">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {editing ? 'Edit Animal' : 'Create Animal'}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Animal Name" name="name" value={animalData.name} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" name="description" value={animalData.description} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Cost (LKR)" name="cost" value={animalData.cost} onChange={handleChange} fullWidth />
          </Grid>
          {animalData.ageGroups.map((group, index) => (
            <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
              <Grid item xs={12}>
                <Typography variant="h6">Age Group {index + 1}</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField label="Age" name="age" value={group.age} onChange={(e) => handleAgeGroupChange(index, e)} fullWidth />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Medicine Cost" name="medicineCost" value={group.medicineCost} onChange={(e) => handleAgeGroupChange(index, e)} fullWidth />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Health Cost" name="healthCost" value={group.healthCost} onChange={(e) => handleAgeGroupChange(index, e)} fullWidth />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Sqft" name="sqft" value={group.sqft} onChange={(e) => handleAgeGroupChange(index, e)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <IconButton color="secondary" onClick={() => handleRemoveAgeGroup(index)}>
                  <RemoveCircle />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="outlined" onClick={handleAddAgeGroup} startIcon={<AddCircle />}>
              Add Age Group
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              {editing ? 'Update Animal' : 'Create Animal'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Animal List
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Cost (LKR)</TableCell>
                <TableCell>Age Groups</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {animals.map((animal) => (
                <TableRow key={animal._id}>
                  <TableCell>{animal.name}</TableCell>
                  <TableCell>{animal.description}</TableCell>
                  <TableCell>{animal.cost}</TableCell>
                  <TableCell>
                    {animal.ageGroups.map((group, index) => (
                      <div key={index}>
                        Age: {group.age}, Medicine Cost: {group.medicineCost}, Health Cost: {group.healthCost}, Sqft: {group.sqft}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(animal)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(animal._id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Admin;
