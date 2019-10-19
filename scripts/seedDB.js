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
    console.log(data.result.n + " records inserted into User");
  })
  .catch(err => {
    console.error(err);
  });

const gameSeeds = [
  {
    name: "Tic-Tac-Toe",
    category: "Fun"
  },
  {
    name: "Some fun math game",
    category: "Fun"
  }
];

db.Game.remove({}).then(() => {
  db.Game.collection
    .insertMany(gameSeeds)
    .then(data => {
      console.log(data.result.n + " records inserted into Games");
      process.exit();
    })
    .catch(err => {
      console.error(err);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});

// db.Game.find({}).then(res => console.log(res));

// db.Game.find({})
//   .then(games => {
//     console.log(games);
//     const historySeeds = [
//       {
//         date: "right here right now",
//         score: Math.floor(Math.random() * 10 + 1),
//         game: games[1]._id
//       },
//       {
//         date: "sometime last week",
//         score: Math.floor(Math.random() * 10 + 1),
//         game: games[0]._id
//       }
//     ];
//     db.History.remove({})
//       .then(() => db.History.collection.insertMany(historySeeds))
//       .then(data => {
//         console.log("Data: " + data);
//         console.log(data.result.n + " records inserted into History");
//         process.exit(0);
//       })
//       .catch(err => {
//         console.error(err);
//         process.exit(1);
//       });
//   })
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });
