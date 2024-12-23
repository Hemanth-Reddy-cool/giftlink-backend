const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Database connection
const uri = 'mongodb+srv://<hemanth>:<password>@cluster0.mongodb.net/<modelsdb>?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Database connection error:', err));

// Route for /api/gifts
router.get('/', (req, res) => {
    // Example: Fetch all gifts from the database (replace with actual data logic)
    res.send('List of gifts');
});

// Route for /api/gifts/:id
router.get('/:id', (req, res) => {
    const giftId = req.params.id;
    // Example: Fetch a gift by its ID (replace with actual data logic)
    res.send(`Details of gift with ID: ${giftId}`);
});

module.exports = router;
