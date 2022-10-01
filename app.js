const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('./client'))

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './pages/index.html'))
})
app.get("/about-us", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './pages/about-us.html'))
})
app.get("/events", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './pages/events.html'))
})
app.get("/event-details", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './pages/event-details.html'))
})
app.get("/merch", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './pages/merch.html'))
})
app.get("/merch-store", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './pages/merch-store.html'))
})


app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not found<h1>')
})

app.listen(5000, ()=>{
    console.log("server active");
})