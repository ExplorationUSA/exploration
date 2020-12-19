const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Pool = require("./database");
const bcrypt = require("bcryptjs");


passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
}, (async (req, username, password, done) => {
  try {
    const {username, password } = req.body;
    const query = 'SELECT * FROM member WHERE username = $1';
    const member = await Pool.query(query, [username]);
    if (member.rows.length === 0) {
      done(null, false, { message: 'Incorrect username.' });
    }
    else { 
      bcrypt.compare(password, member.rows[0].password, (err, isMatch) => {
        if (err) {
          done(null, false, { message: 'Incorrect password.' });
        } else if (isMatch === true) {
          const {id, username, password} = member.rows[0];
          done(null, {id, username, password});
        }
      });
    }
  } catch (err) {
    return done(err);
  }
})));

passport.serializeUser((user, done) => {
  console.log('user', user)
  done(null, user.id)
})

passport.deserializeUser(async (id, cb) => {
  try {
    const query = `SELECT * FROM member WHERE id =  $1`;
    const member = await Pool.query(query, [id]);
    cb(null, members.rows[0]);
  } catch (error) {
   return cb(error)
  }
})