var mysql = require("mysql2");

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

let connection = mysql.createConnection({
  user: "root",
  password: "Kmpg1822.",
  database: "chat",
});

connection.connect((error) => {
  if (error) {
    console.log("Oh No! Connection Error!", error);
  } else {
    console.log("Connection successful");
  }
});

module.exports = connection;
