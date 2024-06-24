import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewAgeGroup = () => {
  const [name, setName] = useState('');
  const [sqFtRequired, setSqFtRequired] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/age-groups', { name, sqFtRequired });
      navigate('/admin/age-groups');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Age Group
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
          Add Age Group
        </Button>
      </form>
    </Container>
  );
};

export default NewAgeGroup;
