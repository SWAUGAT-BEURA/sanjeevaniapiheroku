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
        required: true
    }
})

var courseSchema = new Schema({

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
    difficulty: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    videos: [videoSchema]
}, {
    timestamps: true
})

var Courses = mongoose.model('Course',courseSchema);

module.exports =  Courses;