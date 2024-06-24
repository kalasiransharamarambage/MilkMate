import React, { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
} from '@mui/material';
import jsPDF from 'jspdf';

const DisplayCostDescription = () => {
  const { animal, quantity } = useContext(AnimalContext);

  const totalFoodCost = animal.foodCost * quantity;
  const totalMedicineCost = animal.medicineCost * quantity;

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.text(`Animal: ${animal.name}`, 10, 10);
    doc.text(`Description: ${animal.description}`, 10, 20);
    doc.text(`Total Food Cost Rs.: ${totalFoodCost}`, 10, 30);
    doc.text(`Total Medicine Cost Rs.: ${totalMedicineCost}`, 10, 40);
    doc.addImage(animal.photoUrl, 'JPEG', 15, 50, 180, 160);
    doc.save('animal-details.pdf');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cost and Description
      </Typography>
      <Paper component={Box} p={2}>
        <Typography>Animal: {animal.name}</Typography>
        <Typography>Description: {animal.description}</Typography>
        <Typography>Total Food Cost Rs.: {totalFoodCost}</Typography>
        <Typography>Total Medicine Cost Rs.: {totalMedicineCost}</Typography>
        <Box mt={2}>
          <img src={animal.photoUrl} alt={animal.name} style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Button variant="contained" color="primary" onClick={handleDownloadPdf} style={{ marginTop: '20px' }}>
          Download as PDF
        </Button>
      </Paper>
    </Container>
  );
};

export default DisplayCostDescription;
