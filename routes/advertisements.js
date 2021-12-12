const adsRouter = require("express").Router();

const adsController = require('../controllers/advertisementController')
const videoController = require("../controllers/adsvideocontroller")

adsRouter.route('/')
.get(adsController.getAllAd)
.post(adsController.createAd)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(adsController.deleteAllAds)


adsRouter.route('/:advertisementId')
.get(adsController.getSingleAd)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(adsController.updateAds)
.delete(adsController.deleteSingleAds)


adsRouter.route('/:advertisementId/videos')
.get(videoController.getAllAdVideos)
.post(videoController.createAdVideo)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(videoController.deleteAllAdVideo)


adsRouter.route('/:advertisementId/videos/:videoId')
.get(videoController.getSingleAdVideo)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(videoController.updateAdVideo)
.delete(videoController.deleteSingleAdVideo)


module.exports = adsRouter;