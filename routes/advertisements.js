const adsRouter = require("express").Router();

// Import Controllers
const adsController = require('../controllers/courseController')
const videoController = require("../controllers/videoController")
const sectionController = require("../controllers/sectionController")


adsRouter.route('/')
.get(adsController.getAllCourses)
.post(adsController.createCourse)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(adsController.deleteAllCourses)


adsRouter.route('/:courseId')
.get(adsController.getSingleCourse)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(adsController.updateCourse)
.delete(adsController.deleteSingleCourse)

adsRouter.route('/:courseId/sections')
.get(sectionController.getAllSection)
.post(sectionController.createSection)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(sectionController.deleteAllSections)

adsRouter.route('/:courseId/sections/:sectionId')
.get(sectionController.getSingleSection)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(sectionController.updateSection)
.delete(sectionController.deleteSingleSection)


adsRouter.route('/:courseId/sections/:sectionId/videos')
.get(videoController.getAllVideos)
.post(videoController.createVideo)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(videoController.deleteAllVideo)


adsRouter.route('/:courseId/sections/:sectionId/videos/:videoId')
.get(videoController.getSingleVideo)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(videoController.updateVideo)
.delete(videoController.deleteSingleVideo)


module.exports = courseRouter;