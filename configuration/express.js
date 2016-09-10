const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consign = require('consign'); 

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

consign({ cwd: 'api' })
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;