const { string, required } = require('joi')
const mongoose=require('mongoose')
const Joi=require("joi")
const schema= new mongoose.Schema({
clientName:{
    type:String,
    required:true
},
category:{
    type:String
},
representation:{
    type:String,
},
dateOfCreation:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
bankAccount:{
    type:String,
    required:true
}
})

const Client=mongoose.model('Client',schema)

function validating(genre){
    const schema=Joi.object({
        clientName:Joi.string().required(),
        category:Joi.string().required(),
        representation:Joi.string().required(),
        dateOfCreation:Joi.string().required(),
        address:Joi.string().required(),
        email:Joi.string().required().email(),
        phone:Joi.string().min(10).max(13).required(),
        bankAccount:Joi.string().required()


    })
    return schema.validate(genre)
}

exports.Client=Client
module.exports.validating=validating