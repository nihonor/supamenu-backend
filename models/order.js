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
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true 
},

})

const Order=mongoose.model('Order',orderSchema);
exports.Order=Order;