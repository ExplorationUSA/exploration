const { Pool } = require("pg");
const {db_URL} = require('./config');

console.log('database url', db_URL)
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: db_URL,
});

module.exports = pool;
