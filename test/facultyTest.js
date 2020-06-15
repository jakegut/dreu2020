var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
const Faculty = require('../models/faculty');
var assert = chai.assert;

chai.use(chaiHttp);

describe("Faculty", () => {
    describe("GET / and /:id", () => {
        it("Should get all faculty with none entered", done => {
            chai.request(server)
                .get('/api/faculty')
                .end((err, res) => {
                    assert.equal(res.status, 200, "Status should be 200");
                    assert.property(res.body, 'docs', "Response should have property 'docs'");
                    assert.typeOf(res.body.docs, 'array', "'docs' should be an array");
                    assert.lengthOf(res.body.docs, 0, "'docs' should be of length 0");
                    done();
                });
        });

        it("Should fail to get faculty with invalid ObjectID", done => {
            chai.request(server)
                .get('/api/faculty/999999')
                .end((err, res) => {
                    assert.equal(res.status, 404, "Status should be 404");
                    assert.property(res.body, 'message', "Body should have 'message' property");
                    done();
                });
        });

        var facID;
        it("Should successfully get faculty by id", done => {
            var fac = {
                firstName: "Jake",
                lastName: "G",
                email: "0@adc.edu",
                department: "CS"
            }
            
            Faculty.create(fac, (err, docs) => {
                assert.isNull(err);
                facID = docs._id;
                chai.request(server)
                    .get(`/api/faculty/${facID}`)
                    .end((e, res) => {
                        assert.equal(res.status, 200, "Status should be 200");
                        assert.property(res.body, '_id', "Body should have '_id' property");
                        assert.equal(res.body._id, stuID, "ObjectID returned by API should be equal to input ObjectID");
                        done();
                    });
            });
        });

        it("Should sucessfully get all faculty with one entered", done => {
            chai.request(server)
                .get("/api/faculty")
                .end((err, res) => {
                    assert.equal(res.status, 200, "Status should be 200");
                    assert.property(res.body, 'docs', "Body should have 'docs' property");
                    assert.typeOf(res.body.docs, 'array', "'docs' should be an array");
                    assert.lengthOf(res.body.docs, 1, "'docs' should be of length 1");
                    done();
                });
        });
    });

    describe("POST new faculty", () => {
        it("Should fail to create new faculty with no email", done => {
            var fac = {
                firstName: "Jake",
                lastName: "G",
                department: "CS"
            }
            chai.request(server)
                .post('/api/faculty')
                .send(fac)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'errors', "Body should have 'errors' message");
                    done();
                });
        });

        it("Should fail to create new faculty with no department", done => {
            var fac = {
                firstName: "Jake",
                lastName: "G",
                email: "1@abc.edu"
            }
            chai.request(server)
                .post('/api/faculty')
                .send(fac)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'errors', "Body should have 'errors' message");
                    done();
                });
        });

        it("Should fail to create new faculty with no required fields", done => {
            var fac = {
                firstName: "Jake",
                lastName: "G"
            }
            chai.request(server)
                .post('/api/faculty')
                .send(fac)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'errors', "Body should have 'errors' message");
                    done();
                });
        });

        it("Should sucessfully create new faculty with required fields", done => {
            var fac = {
                firstName: "Jake",
                lastName: "G",
                email: "2@abc.edu",
                department: "CS"
            }
            chai.request(server)
                .post('/api/faculty')
                .send(fac)
                .end((err, res) => {
                    assert.equal(res.status, 201, "Status should be 201");
                    assert.property(res.body, 'docs', 'Body should have docs property');
                    assert.property(res.body, 'message', 'Body should have message property');
                    assert.property(res.body.docs, 'firstName', "Body should have 'firstName', assume body has rest");
                    assert.equal(res.body.docs.firstName, fac.firstName, "firstName should be same as input");
                    assert.equal(res.body.docs.lastName, fac.lastName, "lastName should be same as input");
                    assert.equal(res.body.docs.email, fac.email, "email should be same as input");
                    assert.equal(res.body.docs.department, fac.department, "department should be same as input");
                    assert.typeOf(res.body.docs.classes, 'array', 'classes should be an array')
                    assert.lengthOf(res.body.docs.classes, 0, 'Classes array should be empty');
                    done();
                });
        });

        it("Should fail to create new faculty with same email", done => {
            var fac = {
                firstName: "Jake",
                lastName: "G",
                email: "2@abc.edu",
                department: "CS"
            }

            chai.request(server)
                .post('/api/faculty')
                .send(fac)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'name', "Body should have 'name'");
                    assert.equal(res.body.name, 'MongoError', "Name of error should be 'MongoError'");
                    done();
                });
        });
    });
});