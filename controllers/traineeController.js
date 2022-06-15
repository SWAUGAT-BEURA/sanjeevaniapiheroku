const Trainee = require("../models/traineeModel");

exports.getTrainee = (req, res) => {
  Trainee.find({})
    .then((trainee) => {
      if (trainee) {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(trainee);
      } else {
        res.json({
          msg: "No courses found",
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.createTrainee = (req, res) => {
  Trainee.create({
    trainee: req.body.trainee,
  })
    .then((trainee) => {
      if (trainee) {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(trainee);
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.updateTrainee = (req, res) => {
  Trainee.findByIdAndUpdate(
    req.params.id,
    {
      $set: { trainee: req.body.trainee },
    },
    { new: true }
  )
    .then((trainee) => {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(trainee);
    })
    .catch((err) => {
      res.json(err);
    });
};
