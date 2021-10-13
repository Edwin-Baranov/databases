DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;


USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(10)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,

  text VARCHAR(160),

  roomname VARCHAR(15),

  user_ID INT,
   FOREIGN KEY(user_ID) REFERENCES users(id)

);


-- CREATE TABLE rooms (
--   /* Describe your table here.*/
-- );
/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

