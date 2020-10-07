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

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless:false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({width, height});
});

afterAll(() => {
  browser.close();
})

describe('API routing', () => {
  // const path = 'http://127.0.0.1:3004';
  const path = "http://localhost:3004";
  test('get campaign data by id', async () => {
    // let request = await axios.get(`${path}/campaign/8`
    let request = await axios.get(`${path}/campaign`, {
      params: {
        id: 8
      }
    });
    expect(request.status).toBe(200);
    console.log('request in test', request);
    expect(request.data.identifier).toEqual(8);
  });

  // test('should send 400 when wrong input used for campaign', () => {
  //   const request = axios.get(`${path}/campaign`, {
  //     id: 140
  //   });
  //   ((request())
  //     .then((results) => {
  //       expect((request.status).toBe(400));
  //     })
  //   );
  // });

  // test('get header data based on id', () => {
  //   const request = axios.get(`${path}/header`, {
  //     id: 8
  //   });
  //   ((request())
  //     .then((results) => {
  //       expect((request.status).toBe(200));
  //       expect((request.identifier).toBe(8));
  //     })
  //   );
  // });

  // test('should send 400 when wrong input used for header', () => {
  //   const request = axios.get(`${path}/campaign`, {
  //     id: 140
  //   });
  //   ((request())
  //     .then((results) => {
  //       expect((request.status).toBe(400));
  //     })
  //   );
  // });
});

// BELOW IS USING PROMISES NOT ASYNC AWAIT

// describe('API routing', () => {
//   const path = 'http://127.0.0.1:3005';
//   test('get campaign data based on id', () => {
//     const request = axios.get(`${path}/campaign`, {
//       id: 8
//     });
//     ((request())
//       .then((results) => {
//         expect((request.status).toBe(200));
//         expect((request.identifier).toBe(8));
//       })
//     );
//   });

//   test('should send 400 when wrong input used for campaign', () => {
//     const request = axios.get(`${path}/campaign`, {
//       id: 140
//     });
//     ((request())
//       .then((results) => {
//         expect((request.status).toBe(400));
//       })
//     );
//   });

//   test('get header data based on id', () => {
//     const request = axios.get(`${path}/header`, {
//       id: 8
//     });
//     ((request())
//       .then((results) => {
//         expect((request.status).toBe(200));
//         expect((request.identifier).toBe(8));
//       })
//     );
//   });

//   test('should send 400 when wrong input used for header', () => {
//     const request = axios.get(`${path}/campaign`, {
//       id: 140
//     });
//     ((request())
//       .then((results) => {
//         expect((request.status).toBe(400));
//       })
//     );
//   });
// });

