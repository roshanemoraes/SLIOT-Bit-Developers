const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "12345",
  database: "nodemcu",
  timezone: "Z", // This sets the timezone to UTC
});

// Test database connection
db.getConnection((err, connection) => {
  if(err) {
    console.error('Error connecting to the database: ', err);
  } else {
    console.log('Successfully connected to the database');
    connection.release();
  }
});

module.exports = db;