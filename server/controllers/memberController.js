const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const Pool = require('../model/database.js');

const memberController = {};

memberController.createMember = (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    let hashedPassword;

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) {
        return next({
          log: `memberController.createMember: ${err}`,
          status: 500,
          message: {
            err: 'Internal Server Error',
          },
        });
      }

      // hash the password using our new salt
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return next({
            log: `memberController.createMember: ${err}`,
            status: 500,
            message: {
              err: 'Internal Server Error',
            },
          });
        }

        // override the cleartext password with the hashed one
        hashedPassword = hash;

        const query = 'INSERT INTO member (username, password, email) VALUES ($1, $2 , $3)';
        const member = Pool.query(query, [username, hashedPassword, email]);
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
      log: 'memberController.validateMember: Request parameters are empty',
      status: 406,
      message: {
        err: 'Request parameters are empty',
      },
    });
  }
  try {
    const query = 'SELECT * FROM member WHERE username = $1 OR email = $2';
    const member = await Pool.query(query, [username, email]);
    if (member.rowCount !== 0) {
      return next({
        log: 'memberController.validateMember: User already exists',
        status: 409,
        message: {
          err: 'User already exists',
        },
      });
    }
    return next();
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
