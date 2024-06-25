const Animal = require('../models/animalModel');

// Create new animal
const createAnimal = async (req, res) => {
  try {
    const animal = new Animal(req.body);
    await animal.save();
    res.status(201).json(animal);
  } catch (error) {
    console.error('Error creating animal:', error.message);
    res.status(400).json({ message: 'Error creating animal', error: error.message });
  }
};

// Get all animals
const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    console.error('Error fetching animals:', error.message);
    res.status(500).json({ message: 'Error fetching animals', error: error.message });
  }
};

// Update animal
const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  } catch (error) {
    console.error('Error updating animal:', error.message);
    res.status(400).json({ message: 'Error updating animal', error: error.message });
  }
};

// Delete animal
const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndDelete(id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json({ message: 'Animal deleted successfully' });
  } catch (error) {
    console.error('Error deleting animal:', error.message);
    res.status(500).json({ message: 'Error deleting animal', error: error.message });
  }
};

module.exports = {
  createAnimal,
  getAnimals,
  updateAnimal,
  deleteAnimal,
};
