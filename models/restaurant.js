const { required, string } = require('joi')
const mongoose=require('mongoose')

const restProfileSchema= new mongoose.Schema({
    restName:{
        type:String,
        required:true
    },
    restFullName:{
        type:String,
        required:true
    },
    restPhone:{
        type:String,
        required:true
    },
    ownPhone:{
        type:String,
        required:true
    },
    ownName:{
        type:String,
        required:true
    },
    ownEmail:{
        type:String,
        required:true
    },
    restType:{
        type:String,
        required:true,
        enum:['restaurant','pub','hotel','coffeshop','other']
    },
    openHour:{
        type:String,
        required:true
    },
    closeHour:{
        type:String,
        required:true
    }

}) 

const Rest=mongoose.model('restProfile',restProfileSchema)
exports.Rest=Rest