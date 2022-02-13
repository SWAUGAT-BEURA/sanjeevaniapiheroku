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

// someModel
//     .estimatedDocumentCount()
//     .then(docCount => {
//         console.log(docCount)
//         //and do one super neat trick
//     })
//     .catch(err => {
//         //handle possible errors
//     })


exports.countuserstotal=async(req,res)=>{
    totalusers=0;
    KioskUser.countDocuments({}, function(err, docCount) {
        if (err) { return handleError(err) } //handle possible errors
        console.log(docCount)
        totalusers=docCount
        //and do some other fancy stuff
    })
       
    try{        
        const cart1=new cartModel(cart);
        await cart1.save()
        res.status(200).json({
            message:"successfull",
            totalusers: totalusers

        })

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
        
    }
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