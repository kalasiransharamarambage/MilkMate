import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseAnimal from './pages/ChooseAnimal';
import ChooseAgeGroup from './pages/ChooseAgeGroup';
import EnterQuantity from './pages/EnterQuantity';
import DisplayAnimalDetails from './pages/DisplayAnimalDetails';
import DisplayCostDescription from './pages/DisplayCostDescription';
import AdminDashboard from './pages/AdminDashboard';
import ManageAnimals from './pages/ManageAnimals';
import ManageAgeGroups from './pages/ManageAgeGroups';
import NewAnimal from './pages/NewAnimal';
import NewAgeGroup from './pages/NewAgeGroup';
import EditAnimal from './pages/EditAnimal';
import EditAgeGroup from './pages/EditAgeGroup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseAnimal />} />
        <Route path="/choose-age-group" element={<ChooseAgeGroup />} />
        <Route path="/enter-quantity" element={<EnterQuantity />} />
        <Route path="/display-animal-details" element={<DisplayAnimalDetails />} />
        <Route path="/display-cost-description" element={<DisplayCostDescription />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/animals" element={<ManageAnimals />} />
        <Route path="/admin/age-groups" element={<ManageAgeGroups />} />
        <Route path="/admin/animals/new" element={<NewAnimal />} />
        <Route path="/admin/age-groups/new" element={<NewAgeGroup />} />
        <Route path="/admin/animals/:id/edit" element={<EditAnimal />} />
        <Route path="/admin/age-groups/:id/edit" element={<EditAgeGroup />} />
      </Routes>
    </Router>
  );
};

export default App;
