require('dotenv').config();
const { Pool } = require('pg');

const conn = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PW,
  port: process.env.dbPORT
});

conn.connect((err) => {
  if (err) console.error('error connecting to database: ', err);
  else console.log('connected to database');
});

module.exports = conn;