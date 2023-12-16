/*
* auth.js is the file that contains all the routes for the authentication process.
* bcryptjs is a library that helps us hash passwords.
* jsonwebtoken is used to generate a signed token as the payload.
* passport is used to authenticate requests, which it does through an extensible 
  set of plugins known as strategies.
* passport-jwt is the strategy we are going to use to authenticate requests.
* passport-local is another strategy we could use if we were using username and password,
  but we’re going to use email and password.
*/
const router = require('express').Router();
const bcrypt = require('bycryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');

/* POST register route */
router.post('/register', (req, res) => {}) 


/*POST login route */
router.post('/login', (req, res) => {})


/* PUT update route */
router.put('/update', passport.authenticate('jwt', {session: false}), (req, res) => {})


modules.exports = router;
