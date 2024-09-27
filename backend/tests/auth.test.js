const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
chai.use(chaiHttp);

describe('Books API', () => {
  it('should create a new book', (done) => {
    chai.request(server)
      .post('/books')
      .send({ title: 'New Book', author: 'Author Name' })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});
