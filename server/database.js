const { Pool } = require("pg");

const PG_URI =
  "postgres://irytjylt:yr0Ud-AvKwBLQf7Qaz05WcLuwTSEPGB-@suleiman.db.elephantsql.com:5432/irytjylt";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = pool;
