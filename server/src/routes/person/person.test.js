const request = require('supertest');
const app = require('../../app')

describe('Test GET /persons',()=>{
    test('should respomd with 200 success', async() => {
      const response = await request(app)
      .get('/persons')
      .expect('Content-Type', /json/ )
      .expect(200);
    })   
});
describe('Test POST /persons',()=>{
test('should respond with 200 success ', () => {
  
})
test('it should catchany required ,issing properties ', () => {})

});