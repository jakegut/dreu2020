const router = require('express').Router();
const helloWorld = require('../controllers').helloController;
const studentViews = require("./studentViews");
const facultyViews = require("./facultyViews");

router.get('/', helloWorld);
router.use('/students', studentViews);
router.use('/faculty', facultyViews);

module.exports = router;