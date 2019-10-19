const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const seeds = () => [
  {
    username: "Nate Cutlip",
    email: "tcutlip08@gmail.com",
    password: "wizkik101"
  },
  {
    username: "Jesse McKinney",
    email: "SolidSomething@gmail.com",
    password: "fireball"
  },
  {
    username: "Franklin Wilborn",
    email: "fwilborn@gmail.com",
    password: "tbaPlease"
  },
  {
    username: "Rainbo Jackson",
    email: "rJackson@gmail.com",
    password: "tbaPleaseee"
  }
];

module.exports = seeds;
