const mongoose = require('mongoose');

const AgeGroupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sqFtRequired: { type: Number, required: true },
});

const CAnimalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ageGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AgeGroup' }],
  description: String,
  photoUrl: String,
  foodCost: Number,
  medicineCost: Number,
}, { collection: 'C-Animal' });

module.exports = {
  CAnimal: mongoose.model('CAnimal', CAnimalSchema),
  AgeGroup: mongoose.model('AgeGroup', AgeGroupSchema),
};