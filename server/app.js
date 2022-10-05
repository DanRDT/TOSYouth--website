const express = require("express");
const app = express();

const path = require("path");

const logger = require("./logger")

const merch = require('./routes/merch.js')
const events = require('./routes/events.js')



app.use(express.static(path.resolve(__dirname, '../client')))
app.use(logger)

app.use('/merch', merch)
app.use('/events', events)

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/index.html'))
})
app.get("/about-us", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/about-us.html'))
})




app.all('*', (req, res)=>{
    res.status(404).sendFile(path.resolve(__dirname,'../pages/error404.html'))
})

app.listen(5000, ()=>{
    console.log("Server Active");
})