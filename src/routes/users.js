                    /* Require */
const express = require('express');
const router = express.Router();

                    /* Controller´s require */
const { login , profile , register , processLogin , processRegister , logout } = require('../controllers/userController');

                    /* Validation´s require */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');


router.get('/login', login);
router.post('/login', loginValidator , processLogin);
router.get('/profile', profile);
router.get('/register', register);
router.post('/register', registerValidator , processRegister);
router.get('/logout', logout)

module.exports = router;