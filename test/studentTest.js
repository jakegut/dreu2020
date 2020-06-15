var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
const Student = require('../models/student');
var assert = chai.assert;

chai.use(chaiHttp);

describe('students', () => {
    describe('GET / and /:id ', () => {
        it('Should get all students but have no students', done => {
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
    
        it('Should fail to get student by ID with invalid ID', done => {
            chai.request(server)
                .get('/api/students/0')
                .end((err, res) => {
                    assert.equal(res.status, 404, "Status should be 404");
                    assert.property(res.body, 'message', "Body should have 'message' property");
                    done();
                });
        });

        it('Should fail to get student by netid with no students', done => {
            chai.request(server)
                .get('/api/students/netid/0')
                .end((err, res) => {
                    assert.equal(res.status, 404, "Status should be 404");
                    assert.property(res.body, 'message', "Body should have 'message' property");
                    done();
                });
        });

        var stuID;
        it('Should get student all student with one student entered', done => {
            var stu = {
                netid: 0,
                firstName: 'Jake',
                lastName: 'Gutierez',
                email: '0@abc.edu',
            }
            Student.create(stu, (err, docs) => {
                assert.isNull(err);
                stuID = docs._id;
                chai.request(server)
                    .get('/api/students')
                    .end((error, res) => {
                        assert.equal(res.status, 200, "Status should be 200");
                        assert.property(res.body, 'docs', "Response should have property 'docs'");
                        assert.typeOf(res.body.docs, 'array', "'docs' should be an array");
                        assert.lengthOf(res.body.docs, 1, "'docs' should be of length 1");
                        done();
                    });
            });
        });

        it('Should successfully get one student by ObjectID', done => {
            chai.request(server)
                .get(`/api/students/${stuID}`)
                .end((err, res) => {
                    assert.equal(res.status, 200, "Status should be 200");
                    assert.property(res.body, '_id', "Body should have '_id' property");
                    assert.equal(res.body._id, stuID, "ObjectID returned by API should be equal to input ObjectID");
                    done();
                });
        });

        it('Should get student by netid', done => {
            chai.request(server)
                .get('/api/students/netid/0')
                .end((err, res) => {
                    assert.equal(res.status, 200, "Status should be 404");
                    assert.property(res.body, 'netid', "Body should have 'netid' property");
                    assert.equal(res.body.netid, 0, "netid returned should be equal to input netid");
                    done();
                });
        });

    });
    
    describe('POST new student', () => {
        it('Should fail to create new student with no netid', done => {
            var stu = {
                firstName: 'Jake',
                lastName: 'Gutierez',
                email: 'abc@email.edu',
                classification: 'UG',
                credits: 0
            }
            chai.request(server)
                .post('/api/students')
                .send(stu)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'err', "Body should have 'err' message");
                    done();
                });
        });

        it('Should fail to create new student with no required fields', done => {
            var stu = {
                firstName: 'Jake',
                lastName: 'Gutierez',
                classification: 'UG',
                credits: 0
            }
            chai.request(server)
                .post('/api/students')
                .send(stu)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'err', "Body should have 'err' message");
                    done();
                });
        });

        it('Should successfully create new student with default values', done => {
            var stu = {
                netid: 1,
                firstName: 'Jake',
                lastName: 'Gutierez',
                email: '1@abc.edu',
            }
            chai.request(server)
                .post('/api/students')
                .send(stu)
                .end((err, res) => {
                    assert.equal(res.status, 201, "Status should be 201");
                    assert.property(res.body, 'docs', 'Body should have docs property');
                    assert.property(res.body, 'message', 'Body should have message property');
                    assert.property(res.body.docs, 'firstName', "Body should have 'firstName', assume body has rest");
                    assert.equal(res.body.docs.firstName, stu.firstName, "firstName should be same as input");
                    assert.equal(res.body.docs.lastName, stu.lastName, "lastName should be same as input");
                    assert.equal(res.body.docs.email, stu.email, "email should be same as input");
                    assert.equal(res.body.docs.netid, stu.netid, "netid should be same as input");
                    assert.equal(res.body.docs.classification, 'UG', "classification should be default: 'UG'");
                    assert.equal(res.body.docs.credits, 0, "Credits should be default: 0");
                    assert.typeOf(res.body.docs.classes, 'array', 'classes should be an array')
                    assert.lengthOf(res.body.docs.classes, 0, 'Classes array should be empty');
                    done();
                });
        });

        it('Should fail to create new student with same netid and email', done => {
            var stu = {
                netid: 1,
                firstName: 'Jake',
                lastName: 'Gutierez',
                email: '1@abc.edu',
            }
            chai.request(server)
                .post('/api/students')
                .send(stu)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'err', "Body should have 'err' message");
                    done();
                });
        });

        it('Should fail to create new student with invalid credits', done => {
            var stu = {
                netid: 1,
                firstName: 'Jake',
                lastName: 'Gutierez',
                email: '1@abc.edu',
                credits: -1
            }
            chai.request(server)
                .post('/api/students')
                .send(stu)
                .end((err, res) => {
                    assert.equal(res.status, 400, "Status should be 400");
                    assert.property(res.body, 'err', "Body should have 'err' message");
                    done();
                });
        });

        it('Should successfully create new student with everything provided', done => {
            var stu = {
                netid: 2,
                firstName: 'Jake',
                lastName: 'Gutierez',
                email: '2@abc.edu',
                classification: 'GR',
                credits: 120
            }
            chai.request(server)
                .post('/api/students')
                .send(stu)
                .end((err, res) => {
                    assert.equal(res.status, 201, "Status should be 201");
                    assert.property(res.body, 'docs', 'Body should have docs property');
                    assert.property(res.body, 'message', 'Body should have message property');
                    assert.property(res.body.docs, 'firstName', "Body should have 'firstName', assume body has rest");
                    assert.equal(res.body.docs.firstName, stu.firstName, "firstName should be same as input");
                    assert.equal(res.body.docs.lastName, stu.lastName, "lastName should be same as input");
                    assert.equal(res.body.docs.email, stu.email, "email should be same as input");
                    assert.equal(res.body.docs.netid, stu.netid, "netid should be same as input");
                    assert.equal(res.body.docs.classification, stu.classification, "classification should be same as input");
                    assert.equal(res.body.docs.credits, stu.credits, "Credits should be same as input");
                    assert.typeOf(res.body.docs.classes, 'array', 'classes should be an array');
                    done();
                });
        });
    });
});