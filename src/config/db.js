const { Pool } = require('pg');

module.exports = new Pool({
  user: 'leandronunes',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'launchstoredb',
});
