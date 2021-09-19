// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

const fs = require('fs');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(port, () => {
  console.log('listening on port %s...', server.address().port);
});

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

// listen on the port
// app.listen(port);
