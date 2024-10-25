const{User}=require('../models/user')
const express=require('express')
const router=express.Router()
const Joi=require('joi')

router.post('/',async(req,res)=>{
const{error}=validate(req.body)
if(error) return res.status(400).send(error.details[0].message)
let user=await User.findOne({email:req.body.email,password:req.body.password})
if(!user) return res.status(400).send('Invalid email or password')
    
    const token=user.generateUserToken()

    res.json({token})
})

function validate(req){
const schema=Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(6)
})

return schema.validate(req)
}

module.exports=router
