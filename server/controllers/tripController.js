const Pool = require('../model/database.js');

const tripController = {};

tripController.createTrip = async (req, res, next) => {
  const {
    title,
    destination,
    startDate,
    endDate,
    placeId,
    locationphotos,
    dates_known,
  } = req.body;

  const memberId = req.session.passport.user;

  if (
    title === undefined ||
    destination === undefined ||
    placeId === undefined ||
    locationphotos === undefined ||
    dates_known === undefined ||
    !dates_known ||
    !locationphotos ||
    !placeId ||
    !title ||
    !destination
  ) {
    return next({
      log: 'tripController.createTrip: Request parameters are empty',
      status: 406,
      message: {
        err: 'Request parameters are empty',
      },
    });
  }

  try {
    const query =
      'INSERT INTO trip (title, destination, place_id, start_date, end_date, locationphotos, dates_known, member_id) VALUES ($1, $2 , $3, $4, $5, $6, $7, $8) RETURNING *';
    const trip = await Pool.query(query, [
      title,
      destination,
      placeId,
      startDate,
      endDate,
      locationphotos,
      dates_known,
      memberId,
    ]);

    if (trip.rowCount) {
      res.locals.trip = trip.rows[0];
      next();
    }
  } catch (error) {
    return next({
      log: `tripController.createTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

tripController.getTrips = async (req, res, next) => {
  const memberId = req.session.passport.user;

  try {
    const query = 'SELECT * FROM trip WHERE member_id = $1';
    const trips = await Pool.query(query, [memberId]);

    const { rowCount, rows } = trips;

    if (rowCount) {
      res.locals.trips = rows;
      next();
    }
  } catch (error) {
    return next({
      log: `tripController.getTrips: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

tripController.updateTrip = async (req, res, next) => {
  const { id } = req.params;
  const { title, destination, placeId, startDate, endDate } = req.body;

  if (!id) {
    return next({
      log: 'tripController.updateTrip: Invalid trip id',
      status: 406,
      message: {
        err: 'Invalid trip id',
      },
    });
  }

  if (
    title === undefined ||
    destination === undefined ||
    placeId === undefined ||
    !placeId ||
    !title ||
    !destination
  ) {
    return next({
      log: 'tripController.updateTrip: Request parameters are empty',
      status: 406,
      message: {
        err: 'Request parameters are empty',
      },
    });
  }

  try {
    const query =
      'UPDATE trip SET destination = $1, start_date = $2, end_date = $3, title = $4, place_id = $5 WHERE id = $6 RETURNING *';
    const trip = await Pool.query(query, [
      destination,
      startDate,
      endDate,
      title,
      placeId,
      id,
    ]);

    if (trip.rowCount) {
      res.locals.trip = trip.rows[0];
      next();
    }
  } catch (error) {
    next({
      log: `tripController.updateTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

tripController.deleteTrip = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    next({
      log: 'tripController.deleteTrip: Invalid trip id.',
      status: 406,
      message: {
        err: 'Invalid trip id.',
      },
    });
  }

  try {
    const activityQuery = 'DELETE FROM activity WHERE trip_id = $1';
    const activitiesDeleted = await Pool.query(activityQuery, [id]);
    const query = 'DELETE FROM trip WHERE id = $1';
    const tripDeleted = await Pool.query(query, [id]);

    if (tripDeleted.rowCount) next();
  } catch (error) {
    return next({
      log: `tripController.deleteTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

tripController.getTrip = async (req, res, next) => {
  const { id } = req.params;

  try {
    const query = 'SELECT * FROM trip WHERE id = $1';
    const trip = await Pool.query(query, [id]);

    const {
      rowCount,
      rows: [data],
    } = trip;

    // if (rowCount) {
    res.locals.trip = data;
    next();
    // }
  } catch (error) {
    return next({
      log: `tripController.getTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

module.exports = tripController;
