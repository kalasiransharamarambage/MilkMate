import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AnimalContext } from '../context/AnimalContext';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const ChooseAgeGroup = () => {
  const { animal, setAgeGroup } = useContext(AnimalContext);
  const [ageGroups, setAgeGroups] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (animal) {
      setAgeGroups(animal.ageGroups);
    }
  }, [animal]);

  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
  };

  const handleSubmit = () => {
    setAgeGroup(selectedAgeGroup);
    navigate('/enter-quantity');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Choose Age Group
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Age Group</InputLabel>
        <Select value={selectedAgeGroup} onChange={handleAgeGroupChange}>
          {ageGroups.map((ageGroup, index) => (
            <MenuItem key={index} value={ageGroup.name}>
              {ageGroup.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!selectedAgeGroup}>
        Next
      </Button>
    </Container>
  );
};

export default ChooseAgeGroup;
