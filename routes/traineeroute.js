const traineeRouter = require("express").Router();
const traineeController = require("../controllers/traineeController");

traineeController
  .route("/posttrainee")
  .get(traineeController.getTraineeNumber)
  .post(traineeController.addTrainee);

module.exports = traineeRouter;
// .put(traineeController.updatetrainee);
