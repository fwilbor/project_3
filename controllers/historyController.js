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
      game: {
        name: req.body.name,
        category: req.body.category
      }
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
            game: games[0]._id
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[1]._id
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[2]._id
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[3]._id
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 10 + 1),
            game: games[4]._id
          }
        ])
          .then(hist => {
            res.json(hist);
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
