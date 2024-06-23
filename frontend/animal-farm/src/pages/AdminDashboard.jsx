import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Paper component={Box} p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => navigate('/admin/animals')}>
              Manage Animals
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => navigate('/admin/age-groups')}>
              Manage Age Groups
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
