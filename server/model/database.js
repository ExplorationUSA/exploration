const { Pool } = require("pg");
const {db_URL} = require('../config');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: db_URL,
});

module.exports = pool;
