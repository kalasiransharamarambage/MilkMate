import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';

const EditAgeGroup = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [sqFtRequired, setSqFtRequired] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgeGroup = async () => {
      try {
        const response = await axios.get(`/api/age-groups/${id}`);
        const ageGroup = response.data;
        setName(ageGroup.name);
        setSqFtRequired(ageGroup.sqFtRequired);
      } catch (error) {
        setError(error);
      }
    };

    fetchAgeGroup();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/age-groups/${id}`, { name, sqFtRequired });
      navigate('/admin/age-groups');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Age Group
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
          label="Sq Ft Required"
          type="number"
          value={sqFtRequired}
          onChange={(e) => setSqFtRequired(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditAgeGroup;
