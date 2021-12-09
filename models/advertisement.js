const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    description: [String]
})

var advertisementSchema = new Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
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
    // video: [videoSchema]
    vide:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

var Ads = mongoose.model('Advertisement',advertisementSchema);

module.exports =  Ads;