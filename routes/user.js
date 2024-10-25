const express=require('express')
const router=express.Router()
const{User,validatingUser}=require('../models/user')
const _=require('lodash')
const auth=require('../middleware/auth')


router.get('/me',auth,async(req,res)=>{
    const user=await User.findById(req.user._id).select('-password');
    res.send(user)
})
router.post('/',async(req,res)=>{
    const {error}=validatingUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)

        let user=await User.findOne({email:req.body.email})
        if(user) return res.status(400).send('The user already registered')

            user=new User(_.pick(req.body,['firstName','lastName','phone','email','password']))
            await user.save()
            const token=user.generateUserToken()
            res.header('x-auth-token',token).send(_.pick(user,['_id','firstName','LastName','email','phone']))

})

module.exports=router