const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.History.find(req.query)
      .populate("game")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.History.findById(req.params.id)
      .populate("game")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.History.create({
      date: req.body.date,
      score: req.body.score,
      game: req.body.game
    })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.History.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.History.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  seeds: function(req, res) {
    db.Game.find()
      .then(games => {
        db.History.create([
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[0]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[1]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[2]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[3]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[4]
          }
        ])
          .then(hist => {
<<<<<<< HEAD
            db.User.findOne({ email: "jessman51386@gmail.com" })
=======
            db.User.findOne({ email: "tcutlip08@gmail.com" })
              // db.User.findOne({ email: "franklin.cfg@gmail.com" })
              // db.User.findOne({ email: "jessman51386@gmail.com" })
              // db.User.findOne({ email: "raintest01@yopmail.com" })
>>>>>>> a97c244800b6232f6673a47f99f8e074e638295f
              .then(preData => {
                let updateArr = preData.history;
                for (let i = 0; i < hist.length; i++) {
                  updateArr.push(hist[i]._id);
                }
                db.User.findOneAndUpdate(
<<<<<<< HEAD
                  { email: "jessman51386@gmail.com" },
=======
                  { email: "tcutlip08@gmail.com" },
                  //{ email: "franklin.cfg@gmail.com" },
                  //{ email: "jessman51386@gmail.com" },
                  //{ email: "raintest01@yopmail.com" },
>>>>>>> a97c244800b6232f6673a47f99f8e074e638295f
                  {
                    history: updateArr
                  }
                )
                  .then(postData => {
                    console.log(postData);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
            res.json({ message: "Astro-Boy" });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
