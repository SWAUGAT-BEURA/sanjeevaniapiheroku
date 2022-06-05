// Import Models
const trainee = require("../models/traineeModel");

exports.getTraineeNumber = (req, res) => {
  traineeNumber = 0;
  res.status(200).json({
    message: "successfull",
    traineeNumber: traineeNumber,
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


// exports.updatetrainee = (req, res) => {
//     const name1= "ok";
//     try{
//         let users=await trainee.find({status:name1}).populate('status');
//         if(!users){
//             users=[]
//         }
//         if(users){
//             try{
//                 const id=req.params.id;
//                 const updatedUser = await trainee.findByIdAndUpdate(
//                     req.params.id,
//                     {
//                       $set: req.body,
//                     },
//                     { new: true }
//                   );
//                   res.status(200).json(updatedUser);
//                 if(updatedUser==null){
//                     res.status(400).json({
//                     message:"Contacts couldnt be updated or id not found"
//                 })
//                 }else{
//                     res.status(200).json({
//                     message:"updated sucessfully",
//                     updatedUser:updatedUser
//                     })
//                 }
//             }catch(err){
//                 res.status(500).json({
//                     message:"something went wrong",
//                     error:err
//                 })
//             } 
//         }else{
//             res.status(400).json({
//                 message:"Not found"
//             })
//         }

//     }catch(err){
//         res.status(500).json({
//             message:"something went wrong",
//             error:err
//         })
//     }
// }

