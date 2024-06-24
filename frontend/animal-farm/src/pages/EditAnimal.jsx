import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Alert, Box, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

const EditAnimal = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [foodCost, setFoodCost] = useState('');
  const [medicineCost, setMedicineCost] = useState('');
  const [ageGroups, setAgeGroups] = useState([{ name: '', sqFtRequired: '' }]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await axios.get(`/api/animals/${id}`);
        const animal = response.data;
        setName(animal.name);
        setDescription(animal.description);
        setFoodCost(animal.foodCost);
        setMedicineCost(animal.medicineCost);
        setAgeGroups(animal.ageGroups);
      } catch (error) {
        setError(error);
      }
    };

    fetchAnimal();
  }, [id]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/Canimals/${id}`, { name, description, foodCost, medicineCost, ageGroups });
      navigate('/admin/animals');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Animal
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
        <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '20px' }}>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditAnimal;