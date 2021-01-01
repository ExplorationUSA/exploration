const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const fetch = require('node-fetch');

const passport = require('passport');
const passConfig = require('./passport.config');
const { SESSION_SECRET } = require('./config');
const routeMember = require('./routes/member');
const routeTrips = require('./routes/trips');
const routeActivity = require('./routes/activity');
const routeYelp = require('./routes/yelp');

/**
 * system config.
 */
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
app.use('/api/member', routeMember);
app.use('/api/trips', routeTrips);
app.use('/api/yelp', routeYelp);
app.use('/api/activity', routeActivity);
/**
 * Fetch place images from Google API.
 */
app.get('/imagefetch/:url', (req, res) => {
  fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.url}&fields=photos&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8`
  )
    .then((response) => response.json())
    .then((body) => res.json(body));
});

app.use('/api/activity', routeActivity);

/**
 * Production app at localhost:3000.
 * serve all files from dist folder.
 */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist/')));

  app.get('/*', (req, res) => {
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