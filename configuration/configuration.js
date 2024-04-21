const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/gestiondefoire") 
.then(()=>{
    console.log("Connected Successfuly");
})
.catch((err)=>{console.log(err);

})
module.exports= mongoose