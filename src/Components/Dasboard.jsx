import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  marginLeft: '350px',
}));

const UserDetails = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const StatCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#f0f4ff',
  textAlign: 'center',
  height: '100%',
}));

const InfoCard = styled(Card)(({ theme }) => ({
  border: '1px solid #d1d1d1',
  textAlign: 'left',
  height: '100%',  // Ensure it takes full height of the Grid item
}));

const BillingCard = styled(Card)(({ theme }) => ({
  border: '1px solid #d1d1d1',
  textAlign: 'left',
  height: '100%', 
  // Ensure it takes full height of the Grid item
}));

const Dashboard = () => {
  return (
    <Container sx={{ minHeight: '100vh',width:'1000px',marginLeft:'5px' }}>
      <Box p={4} >
        <UserInfo >
          <Avatar alt="John" sx={{ width: 64, height: 64, backgroundColor: 'grey' }}>J</Avatar>
          <UserDetails>
            <Typography variant="h5">Hello, John</Typography>
            <Typography variant="body1">
              From your account dashboard, you can easily check & view your{' '}
              <Typography component="span" color="primary">Recent Orders</Typography>, manage your{' '}
              <Typography component="span" color="primary">Shipping and Billing Addresses</Typography> and edit your{' '}
              <Typography component="span" color="primary">Password</Typography> and{' '}
              <Typography component="span" color="primary">Account Details</Typography>.
            </Typography>
          </UserDetails>
        </UserInfo>

        <Grid container spacing={2} sx={{ marginLeft: '10%' }}>
          <Grid item xs={12} md={6}>
            <InfoCard sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h6">ACCOUNT INFO</Typography>
                <Typography variant="body1">John</Typography>
                <Typography variant="body1">123, Anywhere Street</Typography>
                <Typography variant="body1">Email: johndoe@gmail.com</Typography>
                <Typography variant="body1">Phone: +94 xxxxxxxxxx</Typography>
                <Button variant="outlined" sx={{ mt: 2, width: '100%' }}>EDIT ACCOUNT</Button>
              </CardContent>
            </InfoCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <BillingCard sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h6">BILLING ADDRESS</Typography>
                <Typography variant="body1">John Doe</Typography>
                <Typography variant="body1">123 Anywhere Street</Typography>
                <Typography variant="body1">Phone Number: +94 xxxx xxxx</Typography>
                <Typography variant="body1">Email: johndoe@gmail.com</Typography>
                <Button variant="outlined" sx={{ mt: 2, width: '100%' }}>EDIT ADDRESS</Button>
              </CardContent>
            </BillingCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard>
              <Box>
                <LocalShippingIcon color="primary" fontSize="large" />
                <Typography variant="h4">10</Typography>
                <Typography variant="body1">Total Orders</Typography>
              </Box>
            </StatCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard>
              <Box>
                <HistoryIcon color="primary" fontSize="large" />
                <Typography variant="h4">05</Typography>
                <Typography variant="body1">Pending Orders</Typography>
              </Box>
            </StatCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard>
              <Box>
                <StarIcon color="primary" fontSize="large" />
                <Typography variant="h4">20</Typography>
                <Typography variant="body1">Completed Orders</Typography>
              </Box>
            </StatCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
