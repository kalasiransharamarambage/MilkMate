import React, { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
} from '@mui/material';

const DisplayAnimalDetails = () => {
  const { animal, ageGroup, quantity } = useContext(AnimalContext);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/display-cost-description');
  };

  const totalSqFt = ageGroup.sqFtRequired * quantity;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Animal Details
      </Typography>
      <Paper component={Box} p={2}>
        <Typography>Animal: {animal.name}</Typography>
        <Typography>Age Group: {ageGroup.name}</Typography>
        <Typography>Quantity: {quantity}</Typography>
        <Typography>Total Square Feet Required: {totalSqFt}</Typography>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Paper>
    </Container>
  );
};

export default DisplayAnimalDetails;
