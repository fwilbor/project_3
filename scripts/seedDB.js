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
    password: "gigadygoo"
  },
  {
    username: "Jesse McKinney",
    email: "jessman51386@gmail.com",
    password: "fireball"
  },
  {
    username: "Franklin Wilborn",
    email: "franklin.cfg@gmail.com",
    password: "Dramatiks"
  },
  {
    username: "Rainbo Jackson",
    email: "raintest01@yopmail.com",
    password: "tbaPleaseee"
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted into User");
  })
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
        console.log(data.result.n + " records inserted into Games");
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

// db.Game.find({})
//   .then(games => {
//     console.log(games);
// const historySeeds = [
//   {
//     date: "right here right now",
//     score: Math.floor(Math.random() * 10 + 1),
//     game: games[1]._id
//   },
//   {
//     date: "sometime last week",
//     score: Math.floor(Math.random() * 10 + 1),
//     game: games[0]._id
//   }
// ];
// db.History.remove({})
//   .then(() => db.History.collection.insertMany(historySeeds))
//   .then(data => {
//     console.log("Data: " + data);
//     console.log(data.result.n + " records inserted into History");
//     // process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     // process.exit(1);
//   });
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });
