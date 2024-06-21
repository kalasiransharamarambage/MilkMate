import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimalContext } from '../context/AnimalContext';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ChooseAgeGroup = () => {
    const { animal, setAgeGroup: setAnimalAgeGroup } = useContext(AnimalContext);
    const navigate = useNavigate();

    if (!animal) {
        return <p>No animal selected.</p>;
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
            <List>
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
