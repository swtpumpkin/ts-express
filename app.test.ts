const app = require('./app');
const SuperTest = require('supertest');

const request = SuperTest(app);

describe('Hello, world!', () => {
  it('should return Hello world!', async () => {
    await request.get('/')
      .expect(200)
  });
});
