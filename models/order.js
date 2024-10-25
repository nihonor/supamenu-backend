const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
orderItem:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'OrderItem',
    required:true
}],
shippingAddress:{
    type:String,
    required:true,
},
city:{
    type:String
}
})

const Order=mongoose.model('order',orderSchema);
exports.Order=Order;