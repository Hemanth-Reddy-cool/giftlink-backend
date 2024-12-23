const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

// MongoDB connection URL
const uri = 'your_mongo_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to connect to the DB
const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

// Route to find current user
router.get('/current-user', async (req, res) => {
    try {
        await connectDB();
        const db = client.db('your_database_name');
        const usersCollection = db.collection('users');

        // Find the current user by ID or another identifier (e.g., from a token)
        const userId = req.user.id; // Assuming the user ID is available in the request, e.g., from authentication middleware

        const user = await usersCollection.findOne({ _id: userId });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
});

module.exports = router;
