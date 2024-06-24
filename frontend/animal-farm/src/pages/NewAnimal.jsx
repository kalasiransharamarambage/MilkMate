import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Alert, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

const NewAnimal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [foodCost, setFoodCost] = useState('');
  const [medicineCost, setMedicineCost] = useState('');
  const [ageGroups, setAgeGroups] = useState([{ name: '', sqFtRequired: '' }]);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAgeGroupChange = (index, field, value) => {
    const newAgeGroups = [...ageGroups];
    newAgeGroups[index][field] = value;
    setAgeGroups(newAgeGroups);
  };

  const handleAddAgeGroup = () => {
    setAgeGroups([...ageGroups, { name: '', sqFtRequired: '' }]);
  };

  const handleRemoveAgeGroup = (index) => {
    const newAgeGroups = ageGroups.filter((_, i) => i !== index);
    setAgeGroups(newAgeGroups);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('foodCost', foodCost);
    formData.append('medicineCost', medicineCost);
    formData.append('ageGroups', JSON.stringify(ageGroups));
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      await axios.post('/api/Canimals', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/admin/animals');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Animal
      </Typography>
      {error && <Alert severity="error">{error.message}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Food Cost"
          type="number"
          value={foodCost}
          onChange={(e) => setFoodCost(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Medicine Cost"
          type="number"
          value={medicineCost}
          onChange={(e) => setMedicineCost(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Typography variant="h6" gutterBottom>
          Age Groups
        </Typography>
        {ageGroups.map((ageGroup, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <TextField
              label="Age Group Name"
              value={ageGroup.name}
              onChange={(e) => handleAgeGroupChange(index, 'name', e.target.value)}
              margin="normal"
            />
            <TextField
              label="Sq Ft Required"
              type="number"
              value={ageGroup.sqFtRequired}
              onChange={(e) => handleAgeGroupChange(index, 'sqFtRequired', e.target.value)}
              margin="normal"
            />
            <IconButton onClick={() => handleRemoveAgeGroup(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button startIcon={<AddIcon />} onClick={handleAddAgeGroup}>
          Add Age Group
        </Button>
        <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ marginTop: '20px' }} />
        <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '20px' }}>
          Add Animal
        </Button>
      </form>
    </Container>
  );
};

export default NewAnimal;
