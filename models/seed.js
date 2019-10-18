const createUser = require("../controllers/userController");
const mongoose = require("mongoose");
const db = require("../models");

const seeds = () => {
  createUser(
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
  );
};

module.exports = seeds;
