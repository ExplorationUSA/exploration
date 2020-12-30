const express = require('express');

const route = express.Router();
const activityController = require('../controllers/activityController');
const authController = require('../controllers/authController');

route.post('/:id', authController.isAuthenticated, activityController.createActivity, (req, res) => {
  res.status(200).json({ message: 'Activity Saved', activity: res.locals.activity });
});

route.delete('/:id', authController.isAuthenticated, activityController.deleteActivity, (req, res) => {
  res.status(200).json({ message: 'Activity Deleted' });
});

route.get('/:id', authController.isAuthenticated, activityController.getActivities, (req, res) => {
  res.status(200).json({ message: 'Activities Retrieved', activities: res.locals.activities });
});

module.exports = route;
