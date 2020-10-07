const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
// var dbIndex = require('../database-mysql/index.js');
const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/campaign', (req, res) => {
  let id = parseInt(req.url.slice(15, req.url.length)) || 4;
  if (typeof id !== 'number') {
    res.err('invalid id, enter number');
  }
  db.getDbData(id)
    .then((data) => {
      console.log('data from /campaign', data[0].backing);
      res.json(data.backing);
    })
    .catch((err) => {
      console.log('error in /campaign request', err);
      res.setStatus(500);
    });
});

app.get('/header', (req, res) => {
  let id = parseInt(req.url.slice(15, req.url.length)) || 4;
  if (typeof id !== 'number') {
    res.error('invalid id, enter number');
  }
  db.getDbData(id)
    .then((data) => {
      console.log('data from /header', data[0].header);
      res.json(data.header);
    })
    .catch((err) => {
      console.log('error in /pledge-options request', err);
      res.setStatus(500);
    });
});

// app.listen(PORT, () => {
//   console.log('listening at port', PORT);
// });