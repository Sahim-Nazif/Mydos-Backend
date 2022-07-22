const mongoose = require('mongoose')

const mydoSchema= new mongoose.Schema({

    todo:{
        type:String,
        trim:true,
        required:true,
        maxlength:150
    }

},{timestamps:true})

module.exports=mongoose.model('Mydos', mydoSchema)