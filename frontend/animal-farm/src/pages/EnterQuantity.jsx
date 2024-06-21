import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimalContext } from '../context/AnimalContext';

const EnterQuantity = () => {
    const [quantity, setQuantity] = useState(1);
    const { setQuantity: setAnimalQuantity } = useContext(AnimalContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setAnimalQuantity(quantity);
        navigate('/display-animal-details');
    };

    return (
        <div>
            <h1>Enter Quantity</h1>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
};

export default EnterQuantity;
