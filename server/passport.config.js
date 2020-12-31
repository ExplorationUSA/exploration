const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Pool = require('./model/database');

passport.use(
  'local',
  new LocalStrategy(async (username, password, done) => {
    try {
      const query = 'SELECT * FROM member WHERE username = $1';
      const member = await Pool.query(query, [username]);
      if (member.rows.length === 0) {
        done(null, false, { message: 'Incorrect username.' });
      } else {
        bcrypt.compare(password, member.rows[0].password, (err, isMatch) => {
          if (err) {
            done(null, false, { message: `Decrypt error: ${err}` });
          }
          if (isMatch) {
            const { id, username } = member.rows[0];
            done(null, { id, username });
          } else done(null, false, { message: 'Incorrect password.' });
        });
      }
    } catch (err) {
      return done(null, false, { message: `${err}` });
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const query = 'SELECT id, username FROM member WHERE id =  $1';
    const member = await Pool.query(query, [id]);
    done(null, member.rows[0]);
  } catch (error) {
    return done(error, null);
  }
});
