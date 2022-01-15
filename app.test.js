const request = require('supertest');
const app = require('./app');

const {   
    API_KEY,
} = require('./config');

//what to test
//home route './'
//today route './today'
//forecast route './forecast'
//forecase route with param variable './forecast/:city'

// describe("GET /", () => {
//     test("Get the home page", async () => {
//         const result = await request(app).get('/')
//             expect(result.statusCode).toBe(200)
//         });
//     });


describe("GET /today", () => {
    test("Get today's temp", async () => {
        const result = await request(app)
        .get('/today')
        .send("London")
            expect(result.statusCode).toBe(200)
        });
    // test("Location undefined causes 400 error code", async () => {
    //     const result = await request(app).get('/today')       
    //         expect(result.statusCode).toBe(400)
    //     });
    });