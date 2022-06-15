const express = require("express");
const kioskcontroller = require("../controllers/kioskcontroller");

const kioskrouter = express.Router();

//check phonenumber
kioskrouter.route("/user/:phno").get(kioskcontroller.checkphonenumber);

//kiosk user
kioskrouter.route("/user").post(kioskcontroller.addkioskuser);

kioskrouter.route("/totalusers").get(kioskcontroller.countuserstotal);

kioskrouter.route("/totalmales").get(kioskcontroller.countuserstotalmales);
kioskrouter.route("/totalfemales").get(kioskcontroller.countuserstotalfemales);

kioskrouter.get("/getnumber", kioskcontroller.getTrainee);

kioskrouter.post("/posttrainee", kioskcontroller.createTrainee);

kioskrouter.put("/updatetrainee/:id", kioskcontroller.updateTrainee);

// kioskrouter.route('/:userId/scores')
// .get(kioskcontroller.getAllScores)
// .post(kioskcontroller.addscore)
// .put((req, res) => {
//     res.statusCode = 403;
// 	res.end('PUT operation not supported');
// })
// .delete(kioskcontroller.deleteAllScores)

module.exports = kioskrouter;
