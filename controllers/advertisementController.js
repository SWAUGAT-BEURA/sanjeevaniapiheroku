// Import Models
const Advertisement = require("../models/advertisement")
const Categories = require("../models/categories")


exports.getAllAd = (req, res) => {
    Advertisement.find({})
    .then((courses) => {
        if(courses) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(courses)
        } else {
            res.json({
                msg: "No courses found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.getSingleAd = (req, res) => {
    Advertisement.findOne({_id: req.params.courseId})
    .then((course) => {
        if(course) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(course)
        } else {
            res.json({
                msg: "No course found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.createAd = (req, res) => {
    Categories.findById(req.body.category_id)
    .then((category) => {
        if(!category) {
            res.json({
                message: "There is no category with " + req.body.category_id + " this id"
            })
        } else {
            Courses.create({
                category_id: req.body.category_id,
                name: req.body.name,
                description: req.body.description,
                difficulty: req.body.difficulty,
                time: req.body.time,
                thumbnail: req.body.thumbnail
            })
            .then((course) => {
                if(course) {
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.json(course)
                }
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
    Courses.deleteOne({_id: req.params.courseId})
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
    Advertisement.findByIdAndUpdate(req.params.courseId, {
        $set: {name: req.body.name,
            description: req.body.description,
            difficulty: req.body.difficulty,
            time: req.body.time}
        }, {new: true}
    )
    .then((course) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(course)
    })
    .catch((err) => {
        res.json(err)
    })
}