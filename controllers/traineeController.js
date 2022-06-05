// Import Models
const trainee = require("../models/traineeModel");

exports.getTraineeNumber = (req, res) => {
  traineeNumber = 0;
  trainee.countDocuments({}, function (err, docCount) {
    if (err) {
      return handleError(err);
    } //handle possible errors
    console.log(docCount);
    traineeNumber = docCount;
    res.status(200).json({
      message: "successfull",
      traineeNumber: traineeNumber,
    });
    //and do some other fancy stuff
  });
};

exports.addTrainee = (req, res) => {
    
  try {
    const addingKioskUsers = new trainee(req.body);
    await addingKioskUsers.save();
    res.status(200).json({
        message:"successfully added",
        kioskuser: addingKioskUsers
    })} catch (e) {
    res.send(e);}
};


exports.updatetrainee = (req, res) => {
    const name1= "ok";
    try{
        let users=await trainee.find({status:name1}).populate('status');
        if(!users){
            users=[]
        }
        if(users){
            const user={        
                status:req.body.status,
                traineeNumber:req.body.traineeNumber
            }
            try{
                const id=req.params.id;
                const updatedusers=await trainee.findByIdAndUpdate(id,{$set:user});
                if(updatedusers==null){
                    res.status(400).json({
                    message:"Contacts couldnt be updated or id not found"
                })
                }else{
                    res.status(200).json({
                    message:"updated sucessfully",
                    updatedusers:updatedusers
                    })
                }
            }catch(err){
                res.status(500).json({
                    message:"something went wrong",
                    error:err
                })
            } 
        }else{
            res.status(400).json({
                message:"Not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

