var models = require('../models');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {
    let messageParams = (req.body.username, req.body.text, req.body.roomname);
    models.messages.create(messageParams, (error, results) => {
      if (error) {
        console.log('error with post');
        res.sendStatus(404, results);
      } else {
        console.log('great job post works!');
        res.sendStatus(201);
      }
    });

  } // a function which handles posting a message to the database
};
