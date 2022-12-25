require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const artworkRoutes = require('./routes/artworks')
const userRoutes = require('./routes/users')
const artistPresets= require('./routes/artistPresets')
const categories = require('./routes/categories')
const galleries = require('./routes/galleries')
const promotedArtworks = require('./routes/promotedArtworks')
const reportArtworks = require('./routes/reportArtworks')
const themePresets = require('./routes/themePresets')
const index=require('./routes/index')

const app = express()

//middlewares
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/',index)
app.use('/api/artworks',artworkRoutes)
app.use('/api/users',userRoutes)
app.use('/api/artistPresets',artistPresets)
app.use('/api/categories',categories)
app.use('/api/galleries',galleries)
app.use('/api/promotedArtworks',promotedArtworks)
app.use('/api/reportArtworks',reportArtworks)
app.use('/api/themePresets',themePresets)



//Connecting to mongo
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("listening on 4000")
    })
})
.catch((err)=>{console.log(err)})