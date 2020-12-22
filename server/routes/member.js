const express = require('express');
const passport = require('passport');

const route = express.Router();
const memberController = require('../controllers/memberController');

route.post('/signup', memberController.validateMember, memberController.createMember, passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Successful Signup' });
});

route.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Successful Login' });
});

route.get('/logout', (req, res) => {
  req.logOut();
  res.status(200).json({ message: 'Logged Out Successfully' });
});

module.exports = route;
