let mongoose = require('mongoose');
let express = require('express');
let database = require('../database/dataGeneration.js');
const axios = require('axios');
const server = require('../server/index.js');
const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3004';
// const describe = require('jest');

let page;
let browser;
const width = 1280;
const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless:false,
//     slowMo: 80,
//     args: [`--window-size=${width},${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({width, height});
// });

// afterAll(() => {
//   console.log('browser', browser);
//   browser.close();
// })

describe('API routing', () => {
  // const path = 'http://127.0.0.1:3004';
  const path = "http://localhost:3004";
  test('get campaign data by id', async () => {
    let request = await axios.get(`${path}/campaign/8`)
    expect(request.status).toBe(200);
    expect(request.data.identifier).toEqual(8);
  });
  test('should set status to 400 when wrong input used for campaign', () => {
    axios.get(`${path}/campaign/800`)
      .then((data) => {
        console.log('data', data);
        expect(data.status).toEqual(400);
      })
  });
  test('get header data based on id', () => {
    axios.get(`${path}/header/8`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(data.identifier).toBe(8);
      })
  });

  test('should send 400 when wrong input used for header', () => {
    axios.get(`${path}/campaign/800`)
      .then((data) => {
        expect((data.status).toBe(400));
      })
  });
});