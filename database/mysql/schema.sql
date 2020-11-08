/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE IF NOT EXISTS fetcher;

USE fetcher;

CREATE TABLE Repo(
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50),
  link VARCHAR(100),
  ownerName VARCHAR(50)
);

