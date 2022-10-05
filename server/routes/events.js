const express = require('express');
const router = express.Router(); 
const path = require("path");

router.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../pages/events.html'))
})
router.get("/details/:eventId", (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../pages/event-details.html'))
})

module.exports = router;