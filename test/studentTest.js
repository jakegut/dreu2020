var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var assert = chai.assert;

chai.use(chaiHttp);

describe('students', () => {
    it('GET / : all students with no students', done => {
        chai.request(server)
        .get('/api/students')
        .end((err, res) => {
            assert.equal(res.status, 200, "Status should be 200");
            assert.property(res.body, 'docs', "Response should have property 'docs'");
            assert.typeOf(res.body.docs, 'array', "'docs' should be an array");
            assert.lengthOf(res.body.docs, 0, "'docs' should be of length 0");
            done();
        });
    });

    it('GET /:id : get one student error', done => {
        chai.request(server)
            .get('/api/students/0')
            .end((err, res) => {
                assert.equal(res.status, 404, "Status should be 404");
                assert.property(res.body, 'message', "Body should have 'message' property");
            });
    });
});