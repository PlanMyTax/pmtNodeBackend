var mongoose = require('mongoose');
var utility = require('../utility');

var ownerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname :{
        type : String,
        required: true,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    lastname :{
        type : String,
        required: true,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    email :{
        type : String,
        // set: utility.toLower,
        lowercase: true,
        required: true,
        default: ""
    },
    phonenumber :{
        type : Number, 
        required : false,
        get: v => Math.round(v),
        default: ""
    },
    password : {
        type : String, 
        required: true
    },
    profileimage :{
        type : String,
        required: false,
        default : ""
    },
    aboutme :{
        type : String,
        required: false,
        default : ""
    },
    city :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    country :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    company :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    school :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    hometown :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    languages :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    gender :{
        type : String,
        required: false,
        set:utility.capitalizeFirstLetter,
        default : ""
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isTraveler : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model("Owners",ownerSchema);