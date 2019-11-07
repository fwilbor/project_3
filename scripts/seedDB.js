const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jbot", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const userSeeds = [
  {
    username: "Nate Cutlip",
    email: "tcutlip08@gmail.com",
    password: "gigadygoo",
    guardian: "iIsBeParent"
  },
  {
    username: "Jesse McKinney",
    email: "jessman51386@gmail.com",
    password: "fireball",
    guardian: "iIsBeParent"
  },
  {
    username: "Franklin Wilborn",
    email: "franklin.cfg@gmail.com",
    password: "Dramatiks",
    guardian: "iIsBeParent"
  },
  {
    username: "Rainbo Jackson",
    email: "raintest01@yopmail.com",
    password: "tbaPleaseee",
    guardian: "iIsBeParent"
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then(data => {})
  .catch(err => {
    console.error(err);
  });

const gameSeeds = [
  {
    name: "Math Quiz",
    category: "Math"
  },
  {
    name: "Add Quiz",
    category: "Math"
  },
  {
    name: "Subtract Quiz",
    category: "Math"
  },
  {
    name: "Multiply Quiz",
    category: "Math"
  },
  {
    name: "Divide Quiz",
    category: "Math"
  }
];

db.Game.remove({})
  .then(() => {
    db.Game.collection
      .insertMany(gameSeeds)
      .then(data => {
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
  .catch(err => {
    console.error(err);
  });

db.History.remove({})
  .then()
  .catch(err => {
    // console.log(err);
  });
