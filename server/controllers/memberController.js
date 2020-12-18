const Pool = require("../database.js");
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const memberController = {};

memberController.createMember = (req, res, next) => {
  if(res.locals.message) return next()
  try {
    const { username, password, email } = req.body;

    let hashedPassword;

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        hashedPassword = hash;

        const member = Pool.query(
          "INSERT INTO member (username, password, email) VALUES ($1, $2 , $3)",
          [username, hashedPassword, email]
        );
        next();
      });
    });
  } catch (err) {
    next({
      log: `memberController.createMember: ${err}`,
      status: 500,
      message: {
        err: `Internal server error`,
      },
    });
  }
};

memberController.verifyMember = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const member = await Pool.query(
      "SELECT * FROM member WHERE username = $1",
      [username]
    );

    bcrypt.compare(password, member.rows[0].password, function (err, isMatch) {
      if (err) return next(err);
      else if (isMatch === true) return next();
    });
  } catch (err) {
    next(err);
  }
};

memberController.validateMember = async (req, res, next) => {
  const {username, password, email} = req.body
  if(username === undefined || password === undefined || email === undefined){
    return next({
      log: `memberController.validateMember: ${err}`,
      status: 406,
      message: {
        err: `Request parameters are empty`,
      },
    })
  }
  try {
    const members = await Pool.query('SELECT * FROM member WHERE username = $1 OR email = $2', [username, email])
    if(members.rows.length === 0) return next();
    else{
      res.locals.message = "User already exists";
      next();
    }
  } catch (error) {
    next({
      log: `memberController.validateMember: ${err}`,
      status: 500,
      message: {
        err: `Internal server error`,
      },
    })
  }
};

module.exports = memberController;
