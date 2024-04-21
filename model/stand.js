const mongoose=require("mongoose")

const standSchema = mongoose.Schema({
    prix:{
        type:Number,
        required:[true,"entrer le prix du stand ?"]
    },
    superficie:{
        type:Number,
        required:[true,"entrer le sperficie du stand ?"]
    },
    disponibilite :{
        type:Boolean ,
        required:true
    },
    Numero:{
        type:Number,
        required:true
    },

    

})


const Stand = mongoose.model('Stand', standSchema);

module.exports = Stand;