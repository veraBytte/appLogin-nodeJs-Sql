// Install express: npm install express
const express = require('express');
const app = express();

// Import routes from api/endPoints.js
const routes = require('./api/endPoints');
const port = 3001; // Port 3001 is used for the server

// Use routes from api/endPoints.js
app.use('/', routes);

// Start the server
app.get('/', (req, res) => {
    res.send('Start');
});

// verify that the server is running
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});