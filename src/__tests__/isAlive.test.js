const request = require('supertest');
const server = require('../../server');
const mongoose = require('../config/db');

describe('Check live endpoints', () => {
  afterAll(async (done) => {
    if (server) {
      await mongoose.connection.close();
      await server.close();
      await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
      done();
    }
  });

  it('should return ready', async () => {
    const res = await request(server)
      .get('/.well-known/ready');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBe('Ready');
  });

  it('should return live', async () => {
    const res = await request(server)
      .get('/.well-known/live');
      // .send()
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBe('Live');// .toHaveProperty('post')
  });

  it('should swagger work', async () => {
    const res = await request(server)
      .get('/api-docs/');
    // .send()
    expect(res.statusCode).toEqual(200);
  });
});
