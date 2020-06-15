const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getOneStudentById);
router.get('/netid/:netid', studentController.getOneStudentByNetId);
router.post('/', studentController.postOneStudent);

module.exports = router;