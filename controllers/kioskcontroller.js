const KioskUser = require("../models/kioskuser"); 


exports.getAllAdState = (req, res) => {
    Ads.findById(req.params.advertisementId)
    .then((course) => {
        if(course!= null) {
            res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(course.video);
        } else {
            res.json({
                msg: "wasn't able to find the given Advertisement"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


// handleing post request
exports.addkioskuser=async(req,res)=>{
    try {
        const addingKioskUsers = new KioskUser(req.body);
        await addingKioskUsers.save();
        res.status(200).json({
            message:"successfully added",
            kioskuser: addingKioskUsers
        })
    } catch (e) {
        res.send(e);
    }
}

// get request for checking phone number
exports.checkphonenumber=async(req,res)=>{
    try {
        const phno = req.params.phno;
        console.log(phno);
        if (!phno) {
            res.send("New User");
        } else {
            const getUser = await KioskUser.findOne({ phno: phno }, 'phno name').exec();
            console.log(getUser);
            // res.send(getUser);
            res.status(200).json({
                message:"successfully fetched th details",
                kioskuser: getUser
            })
        }
    } catch (error) {
        console.log(error);
    }
}