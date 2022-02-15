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