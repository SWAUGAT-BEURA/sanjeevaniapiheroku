const express=require('express');
const kioskcontroller = require('../controllers/kioskcontroller');



const kioskrouter = express.Router();

//check phonenumber
kioskrouter.route("/user/:phno")
.get(kioskcontroller.checkphonenumber);

//kiosk user 
kioskrouter.route("/user")
.post(kioskcontroller.addkioskuser);


module.exports = kioskrouter;