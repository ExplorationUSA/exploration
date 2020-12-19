const passport = require('passport');
const local = require('passport-local')
const LocalStrategy = require("passport-local").Strategy;
const sessionController = {};



sessionController.sessionId = (req, res, next) => {
  const { member } = res.locals;

  console.log(member)
  passport.authenticate("local", (err, member, info) => {
    if (err) return next(err);
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      console.log(member.username)
      next();
    });
  })(req, res, next);
};

module.exports = sessionController;
