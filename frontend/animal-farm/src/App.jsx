import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseAnimal from './pages/ChooseAnimal';
import ChooseAgeGroup from './pages/ChooseAgeGroup';
import EnterQuantity from './pages/EnterQuantity';
import DisplayAnimalDetails from './pages/DisplayAnimalDetails';
import DisplayCostDescription from './pages/DisplayCostDescription';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChooseAnimal />} />
                <Route path="/choose-age-group" element={<ChooseAgeGroup />} />
                <Route path="/enter-quantity" element={<EnterQuantity />} />
                <Route path="/display-animal-details" element={<DisplayAnimalDetails />} />
                <Route path="/display-cost-description" element={<DisplayCostDescription />} />
            </Routes>
        </Router>
    );
};

export default App;
