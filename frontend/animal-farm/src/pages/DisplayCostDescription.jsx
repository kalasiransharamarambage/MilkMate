import React, { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';

const DisplayCostDescription = () => {
    const { animal, quantity } = useContext(AnimalContext);

    const totalFoodCost = animal.foodCost * quantity;
    const totalMedicineCost = animal.medicineCost * quantity;

    return (
        <div>
            <h1>Cost and Description</h1>
            <p>Animal: {animal.name}</p>
            <p>Description: {animal.description}</p>
            <p>Total Food Cost: {totalFoodCost}</p>
            <p>Total Medicine Cost: {totalMedicineCost}</p>
            <p><img src={animal.photoUrl} alt={animal.name} /></p>
        </div>
    );
};

export default DisplayCostDescription;
