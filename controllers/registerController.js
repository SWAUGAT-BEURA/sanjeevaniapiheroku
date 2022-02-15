const User=require('../models/User');
const bcryt=require('bcryptjs');

// exports.userRegister = async(req,res) => {
//     try{
//         const hashedPass=await bcrypt.hash(req.body.password,10);
//         const newUser=new User({
//             fullname: req.body.fullname,
//             email: req.body.email,
//             password:hashedPass,
//             phone:req.body.phone
//         });
//         const user=await newUser.save();
//         res.status(200).json(user);
//     } catch(err){
//         res.status(500).json(err);
//     }
// }

exports.userRegister=async (req,res)=>{   
    try{   
        let user=await User.findOne({email:userfields.email});
        if(!user){            
            const salt=await bcryt.genSalt(10);
            const hashedPass=await bcryt.hash(user.password,salt);
            const newUser=new User({
                fullname: req.body.fullname,
                email: req.body.email,
                password:hashedPass,
                phone:req.body.phone
            });
            const user=await newUser.save();
            res.status(200).json({
                message:"user registered successfully",
                userData: user
            })
        }else{
            res.status(400).json({
                message:"user already eists with the email id",
            
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Something Went Wrong",
            error:err
        })
    }
    

}