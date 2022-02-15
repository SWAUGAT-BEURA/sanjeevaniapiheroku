// Import Models
const Ads = require("../models/advertisement")

exports.getAllAdVideos = (req, res) => {
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

// exports.getAllAdState = (req, res) => {
//     Ads.findById(req.params.advertisementId)
//     .then((course) => {
//         if(course!= null) {
//             res.statusCode = 200;
// 			res.setHeader('Content-Type', 'application/json');
// 			res.json(course.video);
//         } else {
//             res.json({
//                 msg: "wasn't able to find the given Advertisement"
//             })
//         }
//     })
//     .catch((err) => {
//         res.json(err)
//     })
// }

exports.getAllAdState=async(req,res)=>{
    const name1= req.params.state;  
    
    Ads.find({ 'state': name1 }, function (err, docs) {
        if (err) { return handleError(err) } //handle possible errors
        console.log(docCount)
        
        res.status(200).json({
            message:"successfull",
            ads: docs
        })
    });
    // try{
    //     let contacts=await Ads.find({state:req.params.state}).populate('state');
    //     if(!contacts){
    //         contacts=[]
    //     }
    //     const contact=await contacts.findOne({name:name1});
    //     if(contact){
    //         res.status(200).json({
    //             message:"contact fetched",
    //             contact:contact
    //         })
    //     }else{
    //         res.status(400).json({
    //             message:"contact not found"
    //         })
    //     }

    // }catch(err){
    //     res.status(500).json({
    //         message:"something went wrong",
    //         error:err
    //     })
    // }
}


exports.getSingleAdVideo = (req, res) => {
    Ads.findById(req.params.advertisementId)
    .then((course) => {
        if (course != null && course.video.id(req.params.videoId) != null) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(course.video.id(req.params.videoId));
		} else if(course == null){
            res.json({
                msg: "wasn't able to find the given Advertisement"
            })
        } else {
            res.json({
                msg: "Wasnt able to find given video"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.createAdVideo = (req, res) => {
    Ads.findById(req.params.advertisementId)
    .then((course) => {
        if(course) {
            course.video.push({
                title: req.body.title,
                videoLink: req.body.videoLink,
                description: req.body.description,
                vthumbnail:req.body.vthumbnail
            })
            course.save()
            .then((course) => {
                Ads.findById(req.params.advertisementId)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course);
                })
                .catch((err) => {
                    res.json(err)
                })
            })
            .catch((err) => {
                res.json(err)
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.updateAdVideo = (req, res) => {
    Ads.findById(req.params.advertisementId)
    .then((course) => {
        if(course && course.video.id(req.params.videoId) != null) {
            if(req.body.title) {
                course.video.id(req.params.videoId).title = req.body.title
            }
            if(req.body.videoLink) {
                course.video.id(req.params.videoId).videoLink = req.body.videoLink
            }
            if(req.body.description){
                course.video.id(req.params.videoId).description = req.body.description
            }
            if(req.body.vthumbnail){
                course.video.id(req.params.videoId).vthumbnail = req.body.vthumbnail
            }
            course.save()
            .then((course) => {
                Ads.findById(req.params.advertisementId)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course);
                })
            })
        }
        else if(course == null) {
            res.json({
                msg: "Wasn't able to find the Advertisement"
            })
        }
        else {
            res.json({
                msg: "Wasn't able to find the video"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.deleteAllAdVideo =(req, res) => {
    Ads.findById(req.params.advertisementId)
    .then((course) => {
        if(course) {
            for(var i = (course.video.length -1); i>=0; i--) {
				course.video.id(course.video[i]._id).remove();
			}
            course.save()
			.then((course) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(course);
			})
            .catch((err) => {
                res.json(err)
            })
        }
        else if(course == null) {
            re.json({
                msg: "wasn't able to find the advertisement"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.deleteSingleAdVideo =(req, res) => {
    Ads.findById(req.params.advertisementId)
    .then((course) => {
        if(course && course.video.id(req.params.videoId)) {
            course.video.id(req.params.videoId).remove()
            course.save()
            .then((course) => {
                Ads.findById(req.params.advertisementId)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course);
                })
                .catch((err) => {
                    res.json(err)
                })
            })
            .catch((err) => {
                res.json(err)
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}