const express=require('express');
const router=express.Router()
const{Order}=require('../models/order')
const _=require('lodash')
const {OrderItem}=require('../models/orderItem')
router.get('/', async(req,res)=>{
try{
    const order=await Order.find();
    res.send(order);
}
catch(ex){
    console.log(ex);
}

})

router.post('/create',async(req,res)=>{
try{
    let orderItem=new OrderItem(_.pick(req.body,['product','quantity']));
    orderItem=await orderItem.save();
   
    let order=new Order({
        orderItem:orderItem._id,
        shippingAddress:req.body.shippingAddress,
        city:req.body.city

    })

    order=await order.save();
    res.status(201).send(order);
}
catch (err) {
    console.log(err);
    res.status(500).send("Error while creating order",err.message);
}
    

})

module.exports = router;