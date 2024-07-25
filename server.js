// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML file)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData);
    res.send('Submitted successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
