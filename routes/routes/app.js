const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example MongoDB model (replace with your actual model)
const Gift = mongoose.model('Gift', new mongoose.Schema({
    name: String,
    category: String,
    price: Number
}));

// MongoDB connection URI
const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Database connection error:', err));

// Route to search gifts by query parameters (e.g., /api/gifts/search?category=toys)
app.get('/api/gifts/search', async (req, res) => {
    const { category, price } = req.query;

    try {
        const query = {};
        if (category) query.category = category;
        if (price) query.price = { $lte: price };

        const gifts = await Gift.find(query);
        if (gifts.length === 0) {
            return res.status(404).send('No gifts found matching the criteria.');
        }

        res.json(gifts);
    } catch (err) {
        console.error('Error fetching gifts:', err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
