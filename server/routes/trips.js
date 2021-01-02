const express = require('express');

const route = express.Router();
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');
const activityController = require('../controllers/activityController');

route.post(
  '/',
  authController.isAuthenticated,
  tripController.createTrip,
  (req, res) => {
    res.status(200).json({ trip: res.locals.trip, message: 'Trip Created' });
  }
);

route.get(
  '/',
  authController.isAuthenticated,
  tripController.getTrips,
  (req, res) => {
    res.status(200).json({ trips: res.locals.trips });
  }
);

route.get(
  '/:id',
  authController.isAuthenticated,
  tripController.getTrip,
  activityController.getActivities,
  (req, res) => {
    res.status(200).json({ trip: res.locals.trip, activities: res.locals.activities });
  }
);

route.put(
  '/:id',
  authController.isAuthenticated,
  tripController.updateTrip,
  (req, res) => {
    res.status(200).json({ trip: res.locals.trip, message: 'Trip updated' });
  }
);

route.delete(
  '/:id',
  authController.isAuthenticated,
  tripController.deleteTrip,
  (req, res) => {
    res.status(200).json({ message: 'Trip Deleted' });
  }
);

module.exports = route;
