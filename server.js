const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5000' // Allow requests from the Vite server
}));

// Define your routes and middleware
app.get('/quizroom', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(5000);
