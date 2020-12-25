const Pool = require('../model/database.js');

const tripController = {};

tripController.createTrip = async (req, res, next) => {
  try {
    const {
      title, destination, start_date, end_date,
    } = req.body;
    const member_id = req.session.passport.user;

    const query = 'INSERT INTO trip (title, destination, start_date, end_date, member_id) VALUES ($1, $2 , $3, $4, $5)';
    const trip = await Pool.query(query, [title, destination, start_date, end_date, member_id]);
    console.log(trip);
    next();
  } catch (error) {
    next({
      log: `tripController.createTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

tripController.getTrips = async (req, res, next) => {
  try {
    const member_id = req.session.passport.user;

    const query = 'SELECT * FROM trip WHERE member_id = $1';
    const trips = await Pool.query(query, [member_id]);
    res.locals.trips = trips.rows;

    next();
  } catch (error) {
    next({
      log: `tripController.getTrips: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

module.exports = tripController;
