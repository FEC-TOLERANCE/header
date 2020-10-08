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

app.get('/campaign/:id', (req, res) => {
  //handle parameters differently
  // console.log('req data', req);
  // let id = parseInt(req.url.slice(13, req.url.length)) || 4;
  let id = parseInt(req.params.id);
  console.log('id', id);
  if (typeof id !== 'number') {
    res.status(400).send('invalid id, enter number');
  } else {
    db.getDbData(id)
      .then((data) => {
        if (data.length === 0) {
          res.status(400).json({
            success: false,
            message: 'invalid id parameter'
          });
          // throw new Error('incorrect id');
        } else {
          // console.log('send data to client', data[0]);
          res.json(data[0]);
        }
        // console.log('data.id', data[0]);
        // let result = data[0].backing;
        // console.log('result', result);
        // result['identifier'] = data[0].identifier;
        // console.log('data from /campaign', result);
      })
      .catch((err) => {
        console.log('error in /campaign request', err);
        res.setStatus(500);
      });
  }

});

app.get('/header', (req, res) => {
  let id = parseInt(req.url.slice(11, req.url.length)) || 4;
  if (typeof id !== 'number') {
    res.error('invalid id, enter number');
  }
  db.getDbData(id)
    .then((data) => {
      // console.log('data from /header', data[0]);
      res.json(data[0]);
    })
    .catch((err) => {
      console.log('error in /pledge-options request', err);
      res.setStatus(500);
    });
});

if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => {
    console.log('listening at port', PORT);
  });
}
