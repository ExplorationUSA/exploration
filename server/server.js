const express = require('express');
const path = require('path');

const app = express();

/**
 * system config.
 */
const PORT = 3000;

/**
 * handling static assets
 */
app.use(express.static(path.join(__dirname, 'client')));

/**
 * handle parsing request body
 */
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

/**
 * Handle unknown routes.
 */
app.use('*', (req, res) => {
  res.sendStatus(404);
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
