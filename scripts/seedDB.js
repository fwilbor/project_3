const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jbot", {
  useNewUrlParser: true
});

const userSeeds = [
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

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
