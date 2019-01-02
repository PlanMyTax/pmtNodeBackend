var mongoose = require('mongoose');
var utility = require('../utility');

var propertySchema = new mongoose.Schema({
// var Properties = mongoose.model('Properties',{
    _id: mongoose.Schema.Types.ObjectId,
    propcountry :{
        type : String,
        required: true,
        uppercase: true,
        default : ""
    },
    propstaddress :{
        type : String,
        required: true,
        default : ""
    },
    propapt :{
        type : String,
        default : ""
    },
    propcity :{
        type : String,
        set:utility.capitalizeFirstLetter,
        required: true,
        default : ""
    },
    propstate : {
        type : String,
        set:utility.capitalizeFirstLetter,
        required: false,
        default : ""
    },
    propzip :{
        type : Number,
        required: true,
        default : ""
    },
    propheadline :{
        type : String,
        required: false,
        default : ""
    },
    propdesc :{
        type : String,
        required: false,
        default : ""
    },
    proptype :{
        type : String,
        required: false,
        default : ""
    },
    propbedroom :{
        type : Number,
        required: true,
        default : ""
    },
    propguestcount :{
        type : Number,
        required: true,
        default : ""
    },
    propbath :{
        type : Number,
        required: true,
        default : ""
    },
    propimages :{
        type : String,
        required: false,
        default : ""
    },
    propcurrency :{
        type : String,
        required: true,
        default : ""
    },
    propbaserate :{
        type : Number,
        required: true,
        default : ""
    },
    propavaildate :{
        type : Date,
        required: true,
        default : ""
    },
    propavailtill :{
        type : Date,
        required: false,
        default : ""
    },
    email :{
        type : String,
        required: true,
        default : ""
    },
    isBooked :{
        type : Boolean,
        required: false,
        default : false
    },
    bookstartdate: {
        type : Date,
        required: false,
        default : "" 
    },
    bookenddate: {
        type : Date,
        required: false,
        default : "" 
    },
    travelerId :{
        type : String,
        required: false,
        default : ""
    },
    propownerId :{
        type : String,
        required: true,
        default : ""
    }
});

module.exports = mongoose.model("Properties",propertySchema);