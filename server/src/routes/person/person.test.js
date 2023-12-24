const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Test GET /persons', () => {
  test('should respond with 200 success', async () => {
    const response = await request(app)
      .get('/persons')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test POST /persons', () => {
  test('should respond with 201 success created', async () => {
    const response = await request(app)
      .post('/persons')
      .send({
        personName: 'Bruno',
        age: 22, // Send age as a number
        occupation: 'Engineer',
        residence: 'Buea',
      })
      .expect('Content-Type', /json/)
      .expect(201);

    // Check if the age is of type integer
    expect(response.body.age).to.be.a('number'); // Use Chai's typeOf method

    expect(response.body).to.deep.include({
      personName: 'Bruno',
      age: 22,
      occupation: 'Engineer',
      residence: 'Buea',
    });
  });

  test('it should catch any required missing properties', () => {
    // Your test for missing properties goes here
  });
});
