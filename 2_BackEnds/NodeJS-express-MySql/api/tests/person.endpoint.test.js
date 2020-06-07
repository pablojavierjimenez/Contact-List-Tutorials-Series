//@ts-ignore
const request = require('supertest')
const app = require('../server.js')

let userId = 16;
const randomPhoneNumber = Math.floor(Math.random(13) * 1000000) + 951;

describe('Person endpoint', () => {

  it('should CREATE a new person', async () => {
    const res = await request(app)
      .post('/api/person')
      .send({
        name: "Juan Tester v2",
        address: "polola 2345",
        housePhone: `001-${randomPhoneNumber}`,
        mobilePhone: `999-${randomPhoneNumber}`,
        email: "juan.tester@company.com",
        avatar: "https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg"
    })
    userId = res.body.insertId;
    expect(res.statusCode).toEqual(201);
    expect(res.body.affectedRows).toEqual(1);
  });


  it('should UPDATE last created person', async () => {
    const res = await request(app)
      .put(`/api/person/${userId}`)
      .send({
        name: "Juan Tester v2",
        address: "polola 2345",
        housePhone: `001-0000000000`,
        mobilePhone: `999-${randomPhoneNumber}`,
        email: "juan.tester@company.com",
        avatar: "https://i1.sndcdn.com/avatars-000036726170-xxda84-t500x500.jpg"
      })
      expect(res.statusCode).toEqual(200);
      expect(res.body.affectedRows).toEqual(1);
  });

  it('should GET last created person', async () => {
    const res = await request(app)
      .get(`/api/person/${userId}`)
      expect(res.statusCode).toEqual(200);
      expect(res.body[0].housePhone).toEqual(`001-0000000000`);
      expect(res.body[0].mobilePhone).toEqual(`999-${randomPhoneNumber}`);
  });

  it('should DELETE last created person', async () => {
    const res = await request(app)
      .delete(`/api/person/${userId}`)
      expect(res.statusCode).toEqual(200);
  });
});
