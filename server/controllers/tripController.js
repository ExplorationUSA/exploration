const Pool = require('../model/database.js');

const tripController = {};

tripController.createTrip = async (req, res, next) => {
  const { title, destination, startDate, endDate } = req.body;

  const memberId = req.session.passport.user;

  if (
    title === undefined ||
    destination === undefined ||
    startDate === undefined ||
    endDate === undefined ||
    !title ||
    !destination ||
    !startDate ||
    !endDate
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
      'INSERT INTO trip (title, destination, start_date, end_date, member_id) VALUES ($1, $2 , $3, $4, $5)';
    const trip = await Pool.query(query, [
      title,
      destination,
      startDate,
      endDate,
      memberId,
    ]);

    if (trip.rowCount) next();
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
  const { title, destination, startDate, endDate } = req.body;

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
    startDate === undefined ||
    endDate === undefined ||
    !title ||
    !destination ||
    !startDate ||
    !endDate
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
      'UPDATE trip SET destination = $1, start_date = $2, end_date = $3, title = $4 WHERE id = $5';
    const trip = await Pool.query(query, [
      destination,
      startDate,
      endDate,
      title,
      id,
    ]);

    if (trip.rowCount) next();
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
  const memberId = req.session.passport.user;

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
    const query = 'DELETE FROM trip WHERE id = $1 AND member_id = $2';
    const tripDeleted = await Pool.query(query, [id, memberId]);

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

    if (rowCount) {
      res.locals.trip = data;
      next();
    }
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
