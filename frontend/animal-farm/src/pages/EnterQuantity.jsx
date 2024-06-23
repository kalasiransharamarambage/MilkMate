import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimalContext } from '../context/AnimalContext';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

const EnterQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const { setQuantity: setAnimalQuantity } = useContext(AnimalContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setAnimalQuantity(quantity);
    navigate('/display-animal-details');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Enter Quantity
      </Typography>
      <Paper component={Box} p={2}>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Next
        </Button>
      </Paper>
    </Container>
  );
};

export default EnterQuantity;
