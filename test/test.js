let mongoose = require('mongoose');
let express = require('express');
let jest = require('jest');
let database = require('../database.dataGeneration.js');
const axios = require('axios');
const server = require('../server/index.js');


describe('API routing', () => {
  const path = 'http://127.0.0.1:3003';
  test('get campaign data based on id', () => {
    const request = axios.get(`${path}/campaign`, {
      id: 8
    });
    ((request())
      .then((results) => {
        expect((request.status).toBe(200));
        expect((request.identifier).toBe(8));
      })
    );
  });

  test('should send 400 when wrong input used for campaign', () => {
    const request = axios.get(`${path}/campaign`, {
      id: 140
    });
    ((request())
      .then((results) => {
        expect((request.status).toBe(400));
      })
    );
  });

  test('get header data based on id', () => {
    const request = axios.get(`${path}/header`, {
      id: 8
    });
    ((request())
      .then((results) => {
        expect((request.status).toBe(200));
        expect((request.identifier).toBe(8));
      })
    );
  });

  test('should send 400 when wrong input used for header', () => {
    const request = axios.get(`${path}/campaign`, {
      id: 140
    });
    ((request())
      .then((results) => {
        expect((request.status).toBe(400));
      })
    );
  });
});