const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Example MongoDB model (replace with your actual model)
const Gift = mongoose.model('Gift', new mongoose.Schema({
    name: String,
    category: String,
    price: Number
}));

// Route to filter gifts by category
router.get('/category/:category', async (req, res) => {
    const category = req.params.category;

    try {
        const gifts = await Gift.find({ category: category });
        if (gifts.length === 0) {
            return res.status(404).send('No gifts found for this category.');
        }
        res.json(gifts);
    } catch (err) {
        console.error('Error fetching gifts:', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
