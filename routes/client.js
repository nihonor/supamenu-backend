const express=require('express')
const { Client,validating } = require('../models/client')
const router=express.Router()
const _=require('lodash')

router.get('/',async(req,res)=>{
    try{
        const client=await Client.find().sort('clientName')
        res.send(client)
    }
    catch(ex){
    console.log(ex)
    }
   
})

router.post('/',async(req,res)=>{
const {error}=validating(req.body)
if(error) return res.status(400).send(error.details[0].message)
    let client=new Client(_.pick(req.body,['clientName','category','representation','dateOfCreation','address','email','phone','bankAccount']))
await client.save()
res.send(client)
})


module.exports=router