'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Making new changes, everything works fine, HURRAYYYYY!!');
  res.send('Hello there 1.0!!')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
