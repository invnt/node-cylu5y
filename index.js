// run `node index.js` in the terminal

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

app.listen(80);
