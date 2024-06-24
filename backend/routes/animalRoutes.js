const express = require('express');
const router = express.Router();
const CAnimal = require('../models/CAnimal');

// GET all animals
router.get('/', async (req, res) => {
    try {
        const animals = await CAnimal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one animal
router.get('/:id', getCAnimal, (req, res) => {
    res.json(res.animal);
});

// CREATE a new animal
router.post('/', async (req, res) => {
    const animal = new CAnimal({
        name: req.body.name,
        age: req.body.age,
        squareFeet: req.body.squareFeet,
        // Add other fields as necessary
    });

    try {
        const newAnimal = await animal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE an animal
router.patch('/:id', getCAnimal, async (req, res) => {
    if (req.body.name != null) {
        res.animal.name = req.body.name;
    }
    if (req.body.age != null) {
        res.animal.age = req.body.age;
    }
    if (req.body.squareFeet != null) {
        res.animal.squareFeet = req.body.squareFeet;
    }
    // Add other fields as necessary

    try {
        const updatedAnimal = await res.animal.save();
        res.json(updatedAnimal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE an animal
router.delete('/:id', getCAnimal, async (req, res) => {
    try {
        await res.animal.remove();
        res.json({ message: 'Deleted Animal' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCAnimal(req, res, next) {
    let animal;
    try {
        animal = await CAnimal.findById(req.params.id);
        if (animal == null) {
            return res.status(404).json({ message: 'Cannot find animal' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.animal = animal;
    next();
}

module.exports = router;
