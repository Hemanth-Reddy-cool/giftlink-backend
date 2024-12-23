const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Database connection
const uri = 'mongodb+srv://<Hemanth>:<password>@cluster0.mongodb.net/<modelsdb>?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Database connection error:', err));

// Example route
router.get('/', (req, res) => {
    res.send('Welcome to the Gift Routes!');
});

module.exports = router;
