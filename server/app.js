const express = require("express");
const app = express();

const path = require("path");

const logger = require("./logger.js")



app.use(express.static(path.resolve(__dirname, '../client')))
app.use(logger)

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/index.html'))
})
app.get("/about-us", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/about-us.html'))
})
app.get("/events", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/events.html'))
})
app.get("/event-details", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/event-details.html'))
})
app.get("/merch", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/merch.html'))
})
app.get("/merch-store", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../pages/merch-store.html'))
})

app.get('/merch-store/:itemID', (req, res) => {
    const {itemID} = req.params 
    res.send(`<p>item ${itemID}</p>`)
})



app.all('*', (req, res)=>{
    res.status(404).sendFile(path.resolve(__dirname,'../pages/error404.html'))
})

app.listen(5000, ()=>{
    console.log("Server Active");
})