const express = require('express');
const AgeGroup = require('../models/AgeGroup');
const router = express.Router();

// CRUD operations for Age Groups
router.get('/', async (req, res) => {
  try {
    const ageGroups = await AgeGroup.find();
    res.json(ageGroups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ageGroup = await AgeGroup.findById(req.params.id);
    if (!ageGroup) return res.status(404).json({ message: 'Age Group not found' });
    res.json(ageGroup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const ageGroup = new AgeGroup({
    name: req.body.name,
    sqFtRequired: req.body.sqFtRequired,
  });

  try {
    const newAgeGroup = await ageGroup.save();
    res.status(201).json(newAgeGroup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const ageGroup = await AgeGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ageGroup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const ageGroup = await AgeGroup.findByIdAndDelete(req.params.id);
    if (!ageGroup) return res.status(404).json({ message: 'Age Group not found' });
    res.json({ message: 'Age Group deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
