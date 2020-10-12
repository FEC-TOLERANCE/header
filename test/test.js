const mongoose = require('mongoose');
const express = require('express');
const database = require('../database/dataGeneration.js');
const axios = require('axios');

describe('API routing', () => {
  const path = 'http://localhost:3004';
  test('get campaign data by id', () => {
    axios.get(`${path}/campaign/8`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(data.identifier).toEqual(8);
        expect(data.header.title).toEqual('efficiency news to the ');
      })
      .catch((err) => {
        console.log('err in campaign test', err);
      });
  });
  test('should set status to 400 when wrong input used for campaign', () => {
    axios.get(`${path}/campaign/800`)
      .then((data) => {
        expect(data.status).toEqual(400);
      })
      .catch((err) => {
        console.log('err in error campaing test', err);
      });
  });
  test('get header data based on id', () => {
    axios.get(`${path}/header/9`)
      .then((data) => {
        expect(data.status).toEqual(200);
        expect(data.data.identifier).toEqual(9);
      })
      .catch((err) => {
        console.log('err from header happy test', err);
      });
  });

  test('should send 400 when wrong input used for header', () => {
    axios.get(`${path}/campaign/800`)
      .then((data) => {
        expect((data.status).toEqual(400));
      })
      .catch((err) => {
        console.log('err in header 400 test', err);
      });
  });
});