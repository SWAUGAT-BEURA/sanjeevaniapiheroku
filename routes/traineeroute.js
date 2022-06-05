const traineeRouter = require("express").Router();
const traineeController = require("../controllers/traineeController");

router.get("/", traineeController.getTraineeNumber);

// router.post('/addContact/:id',auth,contactController.createcontact)

// router.put("/updateContact/:id",auth,contactController.updateContacts)

// router.delete('/deleteContact/:id',auth,contactController.deleteContact)

// router.get("/getbyid/:id",auth,contactController.getContactbyId)

// router.get("/getbyname/:name",auth,contactController.getContactbyName)

module.exports = traineeRouter;
// .put(traineeController.updatetrainee);
