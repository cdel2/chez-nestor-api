const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/customers')
      .send({
        "firstName":"Charlotte",
        "lastName":"Delfosse",
        "email":"test@gmail.com",
        "phone":"0676564657",
        "birthDate":"1997-07-18",
        "nationality":"french"
      })
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty('post')
  })
})


