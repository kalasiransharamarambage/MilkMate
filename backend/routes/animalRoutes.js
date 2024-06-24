const express = require('express');
const Animal = require('../models/Animal');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// CRUD operations for Animals
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal not found' });
    res.json(animal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', upload.single('photo'), async (req, res) => {
  const animal = new Animal({
    name: req.body.name,
    ageGroups: req.body.ageGroups,
    description: req.body.description,
    photoUrl: req.file ? req.file.path : '',
    foodCost: req.body.foodCost,
    medicineCost: req.body.medicineCost,
  });

  try {
    const newAnimal = await animal.save();
    res.status(201).json(newAnimal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(animal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal not found' });
    res.json({ message: 'Animal deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
