// run `node index.js` in the terminal

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.post('/', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000);
