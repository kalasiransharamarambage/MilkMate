import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimalContext } from '../context/AnimalContext';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from '@mui/material';

const ChooseAgeGroup = () => {
  const { animal, setAgeGroup: setAnimalAgeGroup } = useContext(AnimalContext);
  const navigate = useNavigate();

  if (!animal) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Typography variant="h6">No animal selected.</Typography>
        </Box>
      </Container>
    );
  }

  const handleSelectAgeGroup = (ageGroup) => {
    setAnimalAgeGroup(ageGroup);
    navigate('/enter-quantity');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Choose Age Group for {animal.name}
      </Typography>
      <List component={Paper}>
        {animal.ageGroups.map((age) => (
          <ListItem button key={age._id} onClick={() => handleSelectAgeGroup(age)}>
            <ListItemText primary={age.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ChooseAgeGroup;
