const Pool = require('../database.js');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const memberController = {};

memberController.createMember = (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    let hashedPassword;

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        hashedPassword = hash;

        const member = Pool.query(
          'INSERT INTO member (username, password, email) VALUES ($1, $2 , $3)',
          [username, hashedPassword, email],
        );
        next();
      });
    });
  } catch (err) {
    next({
      log: `memberController.createMember: ${err}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

memberController.validateMember = async (req, res, next) => {
  const { username, password, email } = req.body;
  if (username === undefined || password === undefined || email === undefined) {
    return next({
      log: `memberController.validateMember: ${err}`,
      status: 406,
      message: {
        err: 'Request parameters are empty',
      },
    });
  }
  try {
    const members = await Pool.query('SELECT * FROM member WHERE username = $1 OR email = $2', [username, email]);
    if (members.rows.length === 0) return next();
    next({
      log: `memberController.validateMember: User already exists`,
      status: 500,
      message: {
        err: 'User already exists',
      },
    });
  } catch (error) {
    next({
      log: `memberController.validateMember: ${error}`,
      status: 500,
      message: {
        err: 'Internal server error',
      },
    });
  }
};

module.exports = memberController;
