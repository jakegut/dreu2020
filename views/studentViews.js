const router = require('express').Router();
const studentController = require('../controllers/studentController');


/**
 * @api {get} /api/students/ Get all students
 * @apiName GetAllStudents
 * @apiGroup Student
 * 
 * @apiSuccess {Student[]} docs Array of students
 */
router.get('/', studentController.getAllStudents);

/**
 * @api {get} /api/students/:id Get one student
 * @apiName GetOneStudent
 * @apiGroup Student
 * 
 * @apiParam {Number} id The ObjectID of a student
 * 
 * @apiSuccess {Number} _id ObjectID of student
 * @apiSuccess {Number} netid NetID of student
 * @apiSuccess {String} firstName First name of student
 * @apiSuccess {String} lastName Last name of student
 * @apiSuccess {String} email Email address of student
 * @apiSuccess {String} classification Classification of student
 * @apiSuccess {Number} credits Number of credits student has
 * @apiSuccess {Class[]} classes Array of classes student is in
 */
router.get('/:id', studentController.getOneStudentById);

/**
 * @api {get} /api/students/netid/:netid Get one student by netid
 * @apiName GetOneStudentByNetId
 * @apiGroup Student
 * 
 * @apiParam {Number} netid NetId of Student
 * 
 * @apiSuccess {Number} _id ObjectID of student
 * @apiSuccess {Number} netid NetID of student
 * @apiSuccess {String} firstName First name of student
 * @apiSuccess {String} lastName Last name of student
 * @apiSuccess {String} email Email address of student
 * @apiSuccess {String} classification Classification of student
 * @apiSuccess {Number} credits Number of credits student has
 * @apiSuccess {Class[]} classes Array of classes student is in
 */
router.get('/netid/:netid', studentController.getOneStudentByNetId);

/**
 * @api {post} /api/students/ Create a studnet
 * @apiName PostOneStudent
 * @apiGroup Student
 * 
 * @apiParam {Number} netid The netid of student
 * @apiParam {String} firstName The first name of student
 * @apiParam {String} lastName The last name of student
 * @apiParam {String} email The email of student
 * @apiParam {String} [classification="UG"] The classification of student
 * @apiParam {Number} [credits=0] The credits of student
 * 
 * @apiSuccess {Student} docs The information of student, look at GetOneStudent
 */
router.post('/', studentController.postOneStudent);

module.exports = router;