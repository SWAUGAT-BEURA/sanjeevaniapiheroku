const mongoose = require("mongoose");

var scoreSchema = new Schema({
    score:{
        type: Number,
        default : "0"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const userSchema = new mongoose.Schema({
    phno: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type:String
    },
    age: {
        type:String
    },
    gender: {
        type:String
    },
    empDetails: {
        type:String
    },
    scores: [scoreSchema]

}, {
    timestamps: true
})

// new collection

const KioskUser = new mongoose.model("KioskUser", userSchema)
module.exports = KioskUser