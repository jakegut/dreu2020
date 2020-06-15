const router = require('express').Router();
const facultyController = require('../controllers/facultyController');

/**
 * @api {get} /api/faculty Get all faculty
 * @apiName GetOneFaculty
 * @apiGroup Faculty
 * 
 * @apiSuccess {Faculty[]} docs Array of faculty
 */
router.get("/", facultyController.getAllFaculty);

/**
 * @api {get} /api/faculty/:id Get one faculty
 * @apiName GetOneFaculty
 * @apiGroup Faculty
 * 
 * @apiParam  {String} id ObjectID of faculty
 * 
 * @apiSuccess {String} id ObjectID of faculty
 * @apiSuccess {String} firstName First name of Faculty
 * @apiSuccess {String} lastName Last name of faculty
 * @apiSuccess {String} email Email address of faculty
 * @apiSuccess {String} department Department of faculty
 * @apiSuccess {Class[]} classes Classes faculty is teaching 
 */
router.get("/:id", facultyController.getOneFaculty);

/**
 * @api {post} /api/faculty Create new faculty
 * @apiName PostNewFaculty
 * @apiGroup Faculty
 * 
 * @apiParam {String} firstName First name of faculty
 * @apiParam {String} lastName Last name of faculty
 * @apiParam {String} email Email address of faculty
 * @apiParam {String} department Deparmtent of faculty
 * 
 * @apiSuccess {String} id ObjectID of faculty
 * @apiSuccess {String} firstName First name of Faculty
 * @apiSuccess {String} lastName Last name of faculty
 * @apiSuccess {String} email Email address of faculty
 * @apiSuccess {String} department Department of faculty
 * @apiSuccess {Class[]} classes Classes faculty is teaching (empty)
 */
router.post("/", facultyController.postOneFaculty);

module.exports = router;