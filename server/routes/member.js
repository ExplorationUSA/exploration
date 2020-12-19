const express = require('express');
const memberController = require('../controllers/memberController');
const sessionController = require('../controllers/sessionController');

const route = express.Router();
const passport = require('passport');

route.post('/signup', memberController.validateMember, memberController.createMember, passport.authenticate('local'), (req, res) => {
  console.log('member created');
  if (res.locals.message) res.status(200).json({ message: res.locals.message });
  else {
    res.status(200).json({ message: 'Successful Signup' });
  }
});

route.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('member verified');
  res.status(200).json({ message: 'Succesful Login' });
});

module.exports = route;
