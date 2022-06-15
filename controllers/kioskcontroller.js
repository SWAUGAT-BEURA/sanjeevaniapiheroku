const KioskUser = require("../models/kioskuser");
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

//get all the ads list by state
exports.getAllAdState = (req, res) => {
  Ads.findById(req.params.advertisementId)
    .then((course) => {
      if (course != null) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(course.video);
      } else {
        res.json({
          msg: "wasn't able to find the given Advertisement",
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

//count total users
exports.countuserstotal = async (req, res) => {
  totalusers = 0;
  KioskUser.countDocuments({}, function (err, docCount) {
    if (err) {
      return handleError(err);
    } //handle possible errors
    console.log(docCount);
    totalusers = docCount;
    res.status(200).json({
      message: "successfull",
      totalusers: totalusers,
    });
    //and do some other fancy stuff
  });
};
//count total males
exports.countuserstotalmales = async (req, res) => {
  totalusers = 0;
  KioskUser.countDocuments({ gender: "male" }, function (err, docCount) {
    if (err) {
      return handleError(err);
    } //handle possible errors
    console.log(docCount);
    totalusers = docCount;
    res.status(200).json({
      message: "successfull",
      totalmaleusers: totalusers,
    });
    //and do some other fancy stuff
  });
};

//count total females
exports.countuserstotalfemales = async (req, res) => {
  totalusers = 0;
  KioskUser.countDocuments({ gender: "female" }, function (err, docCount) {
    if (err) {
      return handleError(err);
    } //handle possible errors
    console.log(docCount);
    totalusers = docCount;
    res.status(200).json({
      message: "successfull",
      totalfemaleusers: totalusers,
    });
    //and do some other fancy stuff
  });
};

// handleing post request
exports.addkioskuser = async (req, res) => {
  try {
    const addingKioskUsers = new KioskUser(req.body);
    await addingKioskUsers.save();
    res.status(200).json({
      message: "successfully added",
      kioskuser: addingKioskUsers,
    });
  } catch (e) {
    res.send(e);
  }
};

// get request for checking phone number
exports.checkphonenumber = async (req, res) => {
  try {
    const phno = req.params.phno;
    console.log(phno);
    if (!phno) {
      res.send("New User");
    } else {
      const getUser = await KioskUser.findOne(
        { phno: phno },
        "phno name"
      ).exec();
      console.log(getUser);
      // res.send(getUser);
      res.status(200).json({
        message: "successfully fetched th details",
        kioskuser: getUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// exports.getAllScores = (req, res) => {
//     KioskUser.findById(req.params.userId)
//     .then((user) => {
//         if(user!= null) {
//             res.statusCode = 200;
// 			res.setHeader('Content-Type', 'application/json');
// 			res.json(user.scores);
//         } else {
//             res.json({
//                 msg: "wasnt able to find the given user"
//             })
//         }
//     })
//     .catch((err) => {
//         res.json(err)
//     })
// }

// exports.addscore = (req, res) => {
//     KioskUser.findById(req.params.userId)
//     .then((user) => {
//         if(user) {
//             user.scores.push({
//                 score: req.body.score,
//                 date: req.body.date
//             })
//             user.save()
//             .then((user) => {
//                 KioskUser.findById(req.params.userId)
//                 .then((user) => {
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'application/json');
//                     res.json(user);
//                 })
//                 .catch((err) => {
//                     res.json(err)
//                 })
//             })
//             .catch((err) => {
//                 res.json(err)
//             })
//         }
//     })
//     .catch((err) => {
//         res.json(err)
//     })
// }

// exports.deleteAllScores =(req, res) => {
//     KioskUser.findById(req.params.userId)
//     .then((user) => {
//         if(user) {
//             for(var i = (user.scores.length -1); i>=0; i--) {
// 				user.scores.id(user.scores[i]._id).remove();
// 			}
//             user.save()
// 			.then((user) => {
// 				res.statusCode = 200;
// 				res.setHeader('Content-Type', 'application/json');
// 				res.json(user);
// 			})
//             .catch((err) => {
//                 res.json(err)
//             })
//         }
//         else if(user == null) {
//             re.json({
//                 msg: "wasnt able to find the user"
//             })
//         }
//     })
//     .catch((err) => {
//         res.json(err)
//     })
// }
