const db = require('./config/db.js');

db.getConnection((err, connection) => {
  if(err) {
    console.error('Error connecting to the database: ', err);
  } else {
    console.log('Successfully connected to the database');
    connection.release();
  }
});