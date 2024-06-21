const mongoose = require('mongoose');
const Animal = require('./models/Animal');
const AgeGroup = require('./models/AgeGroup');

mongoose.connect('mongodb+srv://Tharushika:MilkMate2024@milk-mate-web.rd3iyax.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedData = async () => {
    await Animal.deleteMany({});
    await AgeGroup.deleteMany({});

    const ageGroup1 = new AgeGroup({ name: 'Young', sqFtRequired: 10 });
    const ageGroup2 = new AgeGroup({ name: 'Adult', sqFtRequired: 20 });

    await ageGroup1.save();
    await ageGroup2.save();

    const animal1 = new Animal({
        name: 'Cow',
        description: 'A domestic animal',
        photoUrl: '',
        foodCost: 100,
        medicineCost: 50,
        ageGroups: [ageGroup1._id, ageGroup2._id],
    });

    const animal2 = new Animal({
        name: 'Goat',
        description: 'A small domestic animal',
        photoUrl: '',
        foodCost: 50,
        medicineCost: 25,
        ageGroups: [ageGroup1._id],
    });

    await animal1.save();
    await animal2.save();

    console.log('Database seeded!');
    mongoose.connection.close();
};

seedData().catch(err => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
});
