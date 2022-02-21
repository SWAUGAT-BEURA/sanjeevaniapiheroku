// Import Models
const Advertisement = require("../models/advertisement")
// const Categories = require("../models/categories")


exports.getAllAd = (req, res) => {
    Advertisement.find({})
    .then((ads) => {
        if(ads) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(ads)
        } else {
            res.json({
                msg: "No Ads found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.getSingleAd = (req, res) => {
    Advertisement.findOne({_id: req.params.advertisementId})
    .then((ads) => {
        if(ads) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(ads)
        } else {
            res.json({
                msg: "No Ads found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.getAllAdState=async(req,res)=>{    

    Advertisement.find({$or:[{'state': req.query.state},{"allregion": true}]},'video', function (err, docs) {
        if (err) { return handleError(err) } //handle possible errors        
        res.status(200).json({
            message:"successfull",
            ads: docs
        })
    });

 
}


exports.createAd = (req, res) => {
    Advertisement.create({
        name: req.body.name,
        description: req.body.description,
        company: req.body.company,
        time: req.body.time,
        language: req.body.language,
        thumnail:req.body.thumbnail,
        state:req.body.state,
        allregion:req.body.allregion
    })
    .then((ads) => {
        if(ads) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(ads)
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

exports.deleteAllAds = (req, res) => {
    Advertisement.remove({})
    .then((resp) =>{
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	},(err) => next(err))
	.catch((err) => {
        res.json(err)
    });
}

exports.deleteSingleAds = (req, res) => {
    Advertisement.deleteOne({_id: req.params.advertisementId})
    .then((resp) =>{
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	},(err) => next(err))
	.catch((err) => {
        res.json(err)
    });
}

exports.updateAds = (req, res) => {
    Advertisement.findByIdAndUpdate(req.params.advertisementId, {
        $set: {name: req.body.name,
            description: req.body.description,
            company: req.body.company,
            time: req.body.time,
            language: req.body.language,
            thumnail:req.body.thumbnail}
        }, {new: true}
    )
    .then((ads) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(ads)
    })
    .catch((err) => {
        res.json(err)
    })
}