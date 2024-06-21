const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ageGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AgeGroup' }],
    description: String,
    photoUrl: String,
    foodCost: Number,
    medicineCost: Number,
});

module.exports = mongoose.model('Animal', AnimalSchema);
