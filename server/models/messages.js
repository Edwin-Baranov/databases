var db = require('../db');

//db.connection
module.exports = {
  getAll: function (callback) {
    // let queryVal = "SELECT messages.id, messages.text, messages.roomname, messages.user_ID FROM messages INNER JOIN users ON (messages.user_ID = users.id)";
    // db.connection.query(queryVal, (error, results) => {
    //   if (error) {
    //     callback(error, results);
    //   }
    // });
  }, // a function which produces all the messages
  create: function (newMessageParams, callback) {
    // let userID;
    // db.connection.query('SELECT id FROM users WHERE username=' + username + ';', (err, userID) => {
    //   newMessageParams.user_ID = userID;
    //   db.connection.query(queryVal, newMessageParams, (error, results) => {
    //     callback(error, results);
    //   });
    // })





    // let userID = "SELECT id FROM users WHERE username = ?'' ;
    let queryVal = "INSERT INTO messages (user_ID, text, roomname,) VALUE ((SELECT id FROM users WHERE username = ?), ?, ?)";
    db.connection.query(queryVal, newMessageParams, (error, results) => {
      callback(error, results);
    });
  } // a function which can be used to insert a message into the database
};
