import React, { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { useNavigate } from 'react-router-dom';

const DisplayAnimalDetails = () => {
    const { animal, ageGroup, quantity } = useContext(AnimalContext);
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/display-cost-description');
    };

    const totalSqFt = ageGroup.sqFtRequired * quantity;

    return (
        <div>
            <h1>Animal Details</h1>
            <p>Animal: {animal.name}</p>
            <p>Age Group: {ageGroup.name}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Square Feet Required: {totalSqFt}</p>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default DisplayAnimalDetails;
