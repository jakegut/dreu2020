const router = require('express').Router();
const helloWorld = require('../controllers').helloController;
const studentViews = require("./studentViews");

router.get('/', helloWorld);
router.use('/students', studentViews);

module.exports = router;