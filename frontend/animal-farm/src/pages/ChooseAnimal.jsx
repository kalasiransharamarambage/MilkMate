import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AnimalContext } from '../context/AnimalContext';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Paper,
  Box,
} from '@mui/material';

const ChooseAnimal = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setAnimal } = useContext(AnimalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('/api/animals');
        if (Array.isArray(response.data)) {
          setAnimals(response.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const handleSelectAnimal = (animal) => {
    setAnimal(animal);
    navigate('/choose-age-group');
  };

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Alert severity="error">Error loading animals: {error.message}</Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Choose an Animal
      </Typography>
      <List component={Paper}>
        {animals.map((animal) => (
          <ListItem button key={animal._id} onClick={() => handleSelectAnimal(animal)}>
            <ListItemText primary={animal.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ChooseAnimal;
