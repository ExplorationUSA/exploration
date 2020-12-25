const express = require('express');

const route = express.Router();
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');

route.post('/create', authController.isAuthenticated, tripController.createTrip, (req, res) => {
  res.status(200).json({message: 'trip created'});
});

route.get('/retrieve', authController.isAuthenticated, tripController.getTrips, (req, res) => {
  res.status(200).json({trips: res.locals.trips});
})

module.exports = route;
