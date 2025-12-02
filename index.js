// index.js
const express = require('express');
const { default: makeWALConnection } = require('@adiwajshing/baileys');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Setup Baileys Connection
const waConnection = makeWALConnection();

waConnection.connect().then(() => {
    console.log('Baileys Connected');
}).catch(err => {
    console.error('Baileys connection error:', err);
});

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running with Baileys integration!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
