import React, { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import {
  Container,
  Typography,
  Paper,
  Box,
} from '@mui/material';

const DisplayCostDescription = () => {
  const { animal, quantity } = useContext(AnimalContext);

  const totalFoodCost = animal.foodCost * quantity;
  const totalMedicineCost = animal.medicineCost * quantity;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cost and Description
      </Typography>
      <Paper component={Box} p={2}>
        <Typography>Animal: {animal.name}</Typography>
        <Typography>Description: {animal.description}</Typography>
        <Typography>Total Food Cost Rs.: {totalFoodCost}</Typography>
        <Typography>Total Medicine Cost Rs.: {totalMedicineCost}</Typography>
        <Box mt={2}>
          <img src={animal.photoUrl} alt={animal.name} style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Paper>
    </Container>
  );
};

export default DisplayCostDescription;
