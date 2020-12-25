const express = require('express');

const route = express.Router();
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');

route.post('/create', authController.isAuthenticated, tripController.createTrip, (req, res) => {
  res.status(200).json({message: 'Trip Created'});
});

route.get('/retrieve', authController.isAuthenticated, tripController.getTrips, (req, res) => {
  res.status(200).json({trips: res.locals.trips});
});

route.post('/edit', authController.isAuthenticated, tripController.editTrip, (req, res) => {
  res.status(200).json({message: 'Trip Edited'});
});

route.delete('/delete', authController.isAuthenticated, tripController.deleteTrip, (req, res) => {
  res.status(200).json({message: 'Trip Deleted'});
});

module.exports = route;