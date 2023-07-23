const express = require('express');
const app = express();
const routes = require('./api/endPoints');
const port = 3001;

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});