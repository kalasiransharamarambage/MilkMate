// src/components/Admin.jsx
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Admin = () => {
  const [animalData, setAnimalData] = useState({
    name: '',
    ageGroups: [],
    photo: ''
  });

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

  const handleAgeGroupChange = (index, e) => {
    const { name, value } = e.target;
    const ageGroups = [...animalData.ageGroups];
    ageGroups[index] = { ...ageGroups[index], [name]: value };
    setAnimalData({ ...animalData, ageGroups });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/animals', animalData);
      alert('Animal created successfully!');
    } catch (error) {
      console.error('Error creating animal:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Create Animal</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Animal Name" name="name" value={animalData.name} onChange={handleChange} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Photo URL" name="photo" value={animalData.photo} onChange={handleChange} fullWidth />
      </Grid>
      {animalData.ageGroups.map((group, index) => (
        <Grid container spacing={2} key={index}>
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
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleAddAgeGroup}>Add Age Group</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>Create Animal</Button>
      </Grid>
    </Grid>
  );
};

export default Admin;
