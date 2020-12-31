const express = require('express');

const route = express.Router();
const memberController = require('../controllers/memberController');
const authController = require('../controllers/authController');

route.post(
  '/signup',
  memberController.validateMember,
  memberController.createMember,
  authController.authenticate,
  (req, res) => {
    res
      .status(200)
      .json({ message: res.locals.message, user: res.locals.user });
  }
);

route.post('/login', authController.authenticate, (req, res) => {
  res.status(200).json({ message: res.locals.message, user: res.locals.user });
});

route.get('/logout', authController.logout, (req, res) => {
  res.status(200).json({ message: res.locals.message });
});

route.get('/status', authController.isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'ok', user: req.user });
});

module.exports = route;
