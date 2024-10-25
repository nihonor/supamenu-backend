const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RestProfile',
        required:true
    },
    drink:{
        type:new mongoose.Schema({
            menuName:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true,

            },
            desc:{
                type:String,
                required:true
            }
        })
    },
    starter:{
        type:new mongoose.Schema({
            menuName:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true,

            },
            desc:{
                type:String,
                required:true
            }
        })
    },
    appetizer:{
        type:new mongoose.Schema({
            menuName:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true,

            },
            desc:{
                type:String,
                required:true
            }
        })
    },
    dessert:{
        type:new mongoose.Schema({
            menuName:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true,

            },
            desc:{
                type:String,
                required:true
            }
        })
    },
    main:{
        type:new mongoose.Schema({
            menuName:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true,

            },
            desc:{
                type:String,
                required:true
            }
        })
    }
})

const Product=mongoose.model('Product',productSchema);

exports.Product=Product;