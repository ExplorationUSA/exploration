const Pool = require('../model/database.js');

const activityController = {};

activityController.createActivity = async (req, res, next) => {
  const {
    name, location, imageUrl, url, reviewCount, rating, latitude, longitude,
  } = req.body;

  const { id } = req.params;

  if (
    name === undefined
    || location === undefined
    || imageUrl === undefined
    || url === undefined
    || reviewCount === undefined
    || rating === undefined
    || latitude === undefined
    || longitude === undefined
    || id === undefined
    || !name
    || !location
    || !imageUrl
    || !url
    || !reviewCount
    || !rating
    || !latitude
    || !longitude
    || !id
  ) {
    return next({
      log: 'activityController.createactivity: Request parameters are empty',
      status: 406,
      message: {
        err: 'Request parameters are empty',
      },
    });
  }

  try {
    const query = 'INSERT INTO activity (title, location, image_url, url, review_count, rating, latitude, longitude, trip_id) VALUES ($1, $2 , $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const activity = await Pool.query(query, [
      name,
      location,
      imageUrl,
      url,
      reviewCount,
      rating,
      latitude,
      longitude,
      id,
    ]);

    // if (activity.rowCount) {
      res.locals.activity = activity.rows[0];
      next();
    // }
  } catch (error) {
    return next({
      log: `activityController.createActivity: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

activityController.deleteActivity = async (req, res, next) => {
  const { id } = req.params;
  
  if (!id) {
    next({
      log: 'activityController.deleteActivity: Invalid activity id.',
      status: 406,
      message: {
        err: 'Invalid activity id.',
      },
    });
  }

  try {
    const query = 'DELETE FROM activity WHERE id = $1';
    const activityDeleted = await Pool.query(query, [id]);
  
    if (activityDeleted.rowCount) next();
  } catch (error) {
    return next({
      log: `activityController.deleteActivity: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

activityController.getActivities = async (req, res, next) => {
  const { id } = req.params;

  try {
    const query = 'SELECT * FROM activity WHERE trip_id = $1';
    const activities = await Pool.query(query, [id]);

    const { rowCount, rows } = activities;

    // if (rowCount) {
      res.locals.activities = rows;
      next();
    // }
  } catch (error) {
    return next({
      log: `activtyController.getActivities: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

module.exports = activityController;
