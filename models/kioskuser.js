const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phno: {
        type: Number,
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
    score: {
        type: Number,
        default : "0"
    },
    date: {
        type: Date,
        default: Date.now
    }

})

// new collection

const KioskUser = new mongoose.model("KioskUser", userSchema)
module.exports = KioskUser