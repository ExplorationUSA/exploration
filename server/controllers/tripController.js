const Pool = require('../model/database.js');

const tripController = {};

tripController.createTrip = async (req, res, next) => {
  try {
    const {
      title, destination, start_date, end_date,
    } = req.body;
    const member_id = req.session.passport.user;
    
    if(title === undefined || destination === undefined || start_date === undefined || end_date === undefined) {
      next({
        log: `tripController.createTrip: Request parameters are empty'`,
        status: 406,
        message: {
          err: 'Request parameters are empty',
        },
      })
    }

    const duplicateQuery = 'SELECT FROM trip WHERE member_id = $1 AND title = $2';
    const duplicateTrip = Pool.query(duplicateQuery, [member_id, title]);

    if(duplicateTrip.rowCount !== 0){
      next({
        log: 'tripController.createTrip: Trip with this title already exists',
        status: 409,
        message: {
          err: 'Trip with this title already exists',
        },
      })
    }

    const query = 'INSERT INTO trip (title, destination, start_date, end_date, member_id) VALUES ($1, $2 , $3, $4, $5)';
    const trip = await Pool.query(query, [title, destination, start_date, end_date, member_id]);
   
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

tripController.editTrip = async (req, res, next) => {
  try {
    const {
      title, destination, start_date, end_date,
    } = req.body;
    console.log(req.body);

    if(title === undefined || destination === undefined || start_date === undefined || end_date === undefined) {
      next({
        log: `tripController.getTrips: Request parameters are empty'`,
        status: 406,
        message: {
          err: 'Request parameters are empty',
        },
      })
    }
    
    const query = "UPDATE trips SET destination = $1, start_date = $2, end_date = $3 WHERE title = $4";
    const trip = Pool.query(query, [destination, start_date, end_date, title]);
   
    next();

  } catch (error) {
    next({
      log: `tripController.editTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    })
  }
};

tripController.deleteTrip = (req, res, next) => {
  try {

    const title = req.body;
    const member_id = req.session.passport.user;

    if(title === undefined){
      next({
        log: `tripController.deleteTrip: Request parameters are empty'`,
        status: 406,
        message: {
          err: 'Request parameters are empty',
        },
      })
    }

    const query = 'DELETE FROM trip WHERE title = $1 AND member_id = $2';
    const tripDelete = Pool.query(query, [title, member_id])
    next();
    
  } catch (error) {
    next({
      log: `tripController.deleteTrip: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    })
  }
};

module.exports = tripController;
