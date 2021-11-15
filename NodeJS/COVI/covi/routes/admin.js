const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const questionsController= require('../controllers/users');

const router = express.Router();


// /questions => GET
router.get('/questions', questionsController.getQuestions);

// /questions=> POST
router.post('/questions', questionsController.postQuestions);

router.get('/profile', questionsController.getProfile);

//router.get('/riskmeter', questionsController.getRiskmeter);

router.get('/', questionsController.getHome);


router.get('/appointment', questionsController.getAppointment);
router.post('/appointment', questionsController.postAppointment);

router.get('/confirmation', questionsController.getConfirmation);


module.exports = router;

