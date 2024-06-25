const mongoose = require('mongoose');

const ageGroupSchema = new mongoose.Schema({
  age: { type: String, required: true },
  medicineCost: { type: Number, required: true },
  healthCost: { type: Number, required: true },
  sqft: { type: Number, required: true },
});

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  ageGroups: [ageGroupSchema],
});

const Animal = mongoose.model('C-Animal', animalSchema);

module.exports = Animal;
