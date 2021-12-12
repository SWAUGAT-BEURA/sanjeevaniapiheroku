const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    vthumbnail: {
        type: String
    },
    videoLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true}

})

var advertisementSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    company: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    video: [videoSchema]
    
}, {
    timestamps: true
})

var Ads = mongoose.model('Advertisement',advertisementSchema);

module.exports =  Ads;