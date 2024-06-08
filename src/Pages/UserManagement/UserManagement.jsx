import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Avatar, Grid, Box } from '@mui/material';

const products = [
  { id: 1, name: 'Original Thissamaharama Home Made Curd', price: 40, quantity: 1, image: 'curd-image-url' },
  { id: 2, name: 'Home made Fresh Milk 750ml', price: 30, quantity: 1, image: 'milk-image-url' },
];

const users = [
  { id: 1, role: 'Seller', name: 'Hitha Hoda Mikiri', image: 'seller-image-url' },
  { id: 2, role: 'Customer', name: 'John Doe', image: 'customer-image-url' },
];

const AdminDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>Welcome to Admin Dashboard</Typography>

     

      <Box>
        <Typography variant="h6" component="h2" gutterBottom>User ({users.length})</Typography>
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={12} md={6} key={user.id}>
              <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar alt={user.name} src={user.image} sx={{ mr: 2 }} />
                <Box flexGrow={1}>
                  <Typography variant="body1">{user.role}</Typography>
                  <Typography variant="body2">{user.name}</Typography>
                </Box>
                <Button variant="outlined" color="error" size="small">Reject</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;








