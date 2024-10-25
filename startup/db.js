const mongoose=require('mongoose');
module.exports=function(){
    mongoose.connect('mongodb://localhost/supamenu')
    .then(()=>console.log('connnected those successfully'))
    .catch(err=>console.log(err))
}