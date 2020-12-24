const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  db_URL: process.env.DATABASE_URL,
  API_KEY: process.env.API_KEY,
  SESSION_SECRET: process.env.SESSION_SECRET,
};
