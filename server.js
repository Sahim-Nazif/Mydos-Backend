const express = require('express')
const app=express()
const morgan=require('morgan')
const mongoose=require('mongoose')
require ('dotenv').config()

//db connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Mongo-DB Connected...'))
    .catch(err => console.log(err));

//middleware
if (process.env.NODE_ENV==='development') {
  app.use(morgan('dev'))
  console.log('the app is in development phase')

} else if (process.env.NODE_ENV==='production') {

  console.log('the app is in production phase ')
}

const port=process.env.PORT
app.listen(port, ()=>{
  console.log(`Server Running On Port: ${port}`)
})