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

const ManageAgeGroups = () => {
  const [ageGroups, setAgeGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgeGroups = async () => {
      try {
        const response = await axios.get('/api/age-groups');
        if (Array.isArray(response.data)) {
          setAgeGroups(response.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgeGroups();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this age group?')) {
      return;
    }
    try {
      await axios.delete(`/api/age-groups/${id}`);
      setAgeGroups(ageGroups.filter((ageGroup) => ageGroup._id !== id));
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
          <Alert severity="error">Error loading age groups: {error.message}</Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Age Groups
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/admin/age-groups/new')}>
        Add New Age Group
      </Button>
      <Paper component={Box} mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>SqFt Required</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ageGroups.map((ageGroup) => (
              <TableRow key={ageGroup._id}>
                <TableCell>{ageGroup.name}</TableCell>
                <TableCell>{ageGroup.sqFtRequired}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(`/admin/age-groups/${ageGroup._id}/edit`)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(ageGroup._id)}
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

export default ManageAgeGroups;
