const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database-mysql');
// var dbIndex = require('../database-mysql/index.js');
const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/campaign', (req, res) => {
  db.getDbData()
    .then((data) => {
      console.log('data from /campaign', data);
      let results = data.backing;
      console.log('results in /campaign', results);
      res.json(results);
    })
    .catch((err) => {
      console.log('error in /campaign request', err);
      res.setStatus(500);
    });
});

app.get('/pledge-options', (req, res) => {
  db.getDbData()
    .then((data) => {
      console.log('data from /pledge-options', data);
      let results = data.header;
      console.log('results in /pledge-options', results);
      res.json(results);
    })
    .catch((err) => {
      console.log('error in /pledge-options request', err);
      res.setStatus(500);
    });
});