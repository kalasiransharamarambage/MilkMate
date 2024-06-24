import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ManageAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('/api/Canimals');
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

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this animal?')) {
      return;
    }
    try {
      await axios.delete(`/api/Canimals/${id}`);
      setAnimals(animals.filter((animal) => animal._id !== id));
    } catch (error) {
      setError(error);
    }
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
        Manage Animals
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/admin/animals/new')}>
        Add New Animal
      </Button>
      <Paper component={Box} mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animals.map((animal) => (
              <TableRow key={animal._id}>
                <TableCell>{animal.name}</TableCell>
                <TableCell>{animal.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(`/admin/animals/${animal._id}/edit`)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(animal._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ManageAnimals;
