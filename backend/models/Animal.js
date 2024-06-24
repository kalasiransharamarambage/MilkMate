const mongoose = require('mongoose');

const AgeGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sqFtRequired: { type: Number, required: true },
});

const AnimalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ageGroups: [AgeGroupSchema],
  description: String,
  photoUrl: String,
  foodCost: Number,
  medicineCost: Number,
});

module.exports = mongoose.model('Animal', AnimalSchema);
