const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

app.use(express.json());

const routes = require('./src/router');
routes(app);

app.get('/', (_req, res) => {
  return res.status(200).send({ message: 'success' });
})

module.exports = app;