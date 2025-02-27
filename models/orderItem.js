const mongoose=require('mongoose');
const orderItemSchema=new mongoose.Schema({
   
    quantity:{
        type:Number,
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    }

})

const OrderItem=mongoose.model('OrderItem',orderItemSchema);

exports.OrderItem=OrderItem;