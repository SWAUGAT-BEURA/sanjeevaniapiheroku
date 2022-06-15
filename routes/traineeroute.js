const express = require("express");
const router = express.Router();
const traineeController = require("../controllers/traineeController");

//my course section
router.get("/getnumber", dashboardController.mylearnings);

router.post("/posttrainee", dashboardController.mylearningsid);

router.put("/updatetrainee/:id", dashboardController.addmycourse);
