const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database-mysql');
var dbIndex = require('../database-mysql/index.js');
const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/campaign/');