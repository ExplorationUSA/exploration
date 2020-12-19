const express = require('express');
const path = require('path');
const route = require('./routes/member');
const app = express();
const session = require('express-session')
const passport = require('passport');
const passConfig = require('./passport.config');

/**
 * system config.
 */
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(session({secret: 'top secret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', route);

/**
 * Production app at localhost:3000.
 * serve all files from dist folder.
 */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist/')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

/**
 * Handle unknown routes.
 */
app.use('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../404.html'));
});

/**
 * Global Error.
 */
app.use((err, req, res, next) => {
  console.log('Global Error', err);
  const defaultError = {
    log: 'Express error handler caught: unknown middleware error',
    status: 400,
    message: {
      err: 'Unexpected error occured',
    },
  };

  const errObj = Object.assign(defaultError, err);
  console.log('SEREVER ERROR:', errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
