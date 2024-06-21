import React, { createContext, useState } from 'react';

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
    const [animal, setAnimal] = useState(null);
    const [ageGroup, setAgeGroup] = useState(null);
    const [quantity, setQuantity] = useState(1);

    return (
        <AnimalContext.Provider value={{ animal, setAnimal, ageGroup, setAgeGroup, quantity, setQuantity }}>
            {children}
        </AnimalContext.Provider>
    );
};
