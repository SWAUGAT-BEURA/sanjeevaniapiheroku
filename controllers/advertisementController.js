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


exports.createAd = (req, res) => {
    Advertisement.create({
        name: req.body.name,
        description: req.body.description,
        difficulty: req.body.difficulty,
        time: req.body.time,
        thumbnail: req.body.thumbnail
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
            difficulty: req.body.difficulty,
            time: req.body.time}
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