const express = require('express');
const app = express();
const port = process.env.port|| 8080;

app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

app.get('/topic', (req, res) => {res.send([1, 2, 3]);
});

app.post('/topic', (req, res) => {res.send([10, 20, 30]);
});

app.listen(port, err => {if (err) {
    return console.log("ERROR", err);

}console.log(`listen on port ${port}`);

});