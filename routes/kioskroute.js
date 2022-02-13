const express=require('express');
const kioskcontroller = require('../controllers/kioskcontroller');



const kioskrouter = express.Router();

//check phonenumber
kioskrouter.route("/user/:phno")
.get(kioskcontroller.checkphonenumber);

//kiosk user 
kioskrouter.route("/user")
.post(kioskcontroller.addkioskuser);

kioskrouter.route("/totalusers")
.get(kioskcontroller.countuserstotal);

kioskrouter.route("/totalmales")
.get(kioskcontroller.countuserstotalmales);
kioskrouter.route("/totalfemales")
.get(kioskcontroller.countuserstotalfemales);

module.exports = kioskrouter;