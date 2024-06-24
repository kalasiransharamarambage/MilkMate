const mongoose = require('mongoose');

const AgeGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sqFtRequired: { type: Number, required: true },
});

const CAnimalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ageGroups: [AgeGroupSchema],
  description: String,
  photoUrl: String,
  foodCost: Number,
  medicineCost: Number,
},{ collection: 'C-Animal' });

module.exports = mongoose.model('CAnimal', CAnimalSchema);
