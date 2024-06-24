const mongoose = require('mongoose');

const AgeGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sqFtRequired: { type: Number, required: true },
});

module.exports = mongoose.model('AgeGroup', AgeGroupSchema);
