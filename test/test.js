let mongoose = require('mongoose');
let express = require('express');
let jest = require('jest');
let database = require('../database.dataGeneration.js');

test('generating data object for database', () => {
  expect((database.dataGeneration()).identifier.toBe())
})

