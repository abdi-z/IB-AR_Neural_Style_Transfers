const mongoose = require('mongoose')

const Schema = mongoose.Schema

const artworkSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgURL:{
        type:String
    },
    createdByID:{
        type:String,
        required:true
    },
    categoryID:{
        type:Number,
        required:true
    },
    nftLink:{
        type:String,
    },
    presetID:{
        type:String,
    }
},{ timestamps:true })

module.exports = mongoose.model('Artwork', artworkSchema)