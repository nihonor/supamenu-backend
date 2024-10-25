const express=require('express')
const client=require('../routes/client')
const user=require('../routes/user')
const login=require('../routes/authi')
const profile=require('../routes/restaurant')
const cors=require('cors')
const drinks=require('../routes/category')
const order=require('../routes/order')
const product=require('../routes/product');
module.exports=function(app){
    app.use(express.json())
    app.use(cors())
    app.use('/api/client',client)
    app.use('/api/register/user',user)
    app.use('/api/login/user',login)
    app.use('/api/profile',profile)
    app.use('/',drinks)
    app.use('/api/order',order);
    app.use('/api/product',product);

}