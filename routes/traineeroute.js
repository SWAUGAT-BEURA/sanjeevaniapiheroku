const express = require("express");
const router = express.Router();
const traineeController = require("../controllers/traineeController");

//my course section
router.get("/getnumber", traineeController.getTrainee);

router.post("/posttrainee", traineeController.createTrainee);

router.put("/updatetrainee/:id", traineeController.updateTrainee);
