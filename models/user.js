const Joi=require('joi')
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,

    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.methods.generateUserToken=function(){
    const token=jwt.sign({_id:this._id},'key')
    return token
}

const User=mongoose.model('user',userSchema)

function validatingUser(user){
    const schema=Joi.object({
        firstName:Joi.string().required(),
        lastName:Joi.string(),
        phone:Joi.string().required().min(10).max(12),
        email:Joi.string().required().email(),
        password:Joi.string().min(6)
    })
    return schema.validate(user)
}

exports.User=User
module.exports.validatingUser=validatingUser
