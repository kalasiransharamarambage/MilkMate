const express = require('express');
const { createAnimal, getAnimals, updateAnimal, deleteAnimal } = require('../controllers/animalController');
const router = express.Router();

// POST /api/CAnimal
router.post('/', createAnimal);

// GET /api/CAnimal
router.get('/', getAnimals);

// PUT /api/CAnimal/:id
router.put('/:id', updateAnimal);

// DELETE /api/CAnimal/:id
router.delete('/:id', deleteAnimal);

module.exports = router;
