
const express= require('express');
const router=express.Router();
const{Product}=require('../models/product')
const _=require('lodash')



router.post('/',async(req,res)=>{
    try{
        let product= new Product(_.pick(req.body,['restaurant','drink','starter','appetizer','dessert','main']))
        await product.save();
        res.send(product)
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error while creating a new Product: ' + err.message);
    }
    
})

module.exports=router