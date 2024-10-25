const{Rest}=require('../models/restaurant')
const express=require('express')
const router=express.Router()
const _=require('lodash')
const auth=require('../middleware/auth')

router.post('/',auth,async(req,res)=>{
    let rest=await Rest.findOne({restPhone:req.body.restPhone})
    if(rest) return res.status(400).send('The restaurant already registered')
    

        rest=new Rest(_.pick(req.body,['restName','restFullName','restPhone','ownPhone','ownName','ownEmail','restType','openHour','closeHour']))

        await rest.save()
        res.send(rest)
})

module.exports=router