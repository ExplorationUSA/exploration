const express = require('express');

const route = express.Router();
const yelpController = require('../controllers/yelpController');
const authController = require('../controllers/authController');

route.post(
  '/',
  authController.isAuthenticated,
  yelpController.getActivities,
  (req, res) => {
    res
      .status(200)
      .json({ result: res.locals.result, message: res.locals.message });
  }
);

module.exports = route;
