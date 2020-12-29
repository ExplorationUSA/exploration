const passport = require('passport');

const authController = {};

authController.authenticate = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next({
        log: `authController.authenticate: ${err}`,
        status: 401,
        message: {
          err: 'Unathorized',
        },
      });
    }
    if (!user) {
      return next({
        log: `authController.authenticate: ${info.message}`,
        status: 403,
        message: {
          err: `${info.message}`,
        },
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next({
          log: `authController.authenticate: ${err}`,
          status: 401,
          message: {
            err: 'Unathorized',
          },
        });
      }
      res.locals.message = 'Successful Login';
      res.locals.user = user;
      return next();
    });
  })(req, res, next);
};

authController.logout = (req, res, next) => {
  req.logout();
  res.locals.message = 'Successfully logged out';
  next();
};

authController.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next({
      log: 'authController.isAuthenticated: Access Denied',
      status: 403,
      message: {
        err: 'Access Denied. Please login.',
      },
    });
  }
  next();
};

module.exports = authController;
