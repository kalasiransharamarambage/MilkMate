// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Tharushika:MilkMate2024@milk-mate-web.rd3iyax.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const AnimalSchema = new mongoose.Schema({
  name: String,
  ageGroups: [
    {
      age: String,
      medicineCost: Number,
      healthCost: Number,
      sqft: Number,
    }
  ],
  photo: String,
});

const Animal = mongoose.model('Animal', AnimalSchema);

app.post('/api/animals', async (req, res) => {
  try {
    const animal = new Animal(req.body);
    await animal.save();
    res.status(201).send(animal);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/animals', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.send(animals);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
