const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create connection to database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Open MySQL connection
connection.connect(error => {
  if (error) throw error;
  //console.log("✅ Connected to the database");
});

module.exports = connection;
