const path = require("path");

const sendEventsPage = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../pages/events.html'))
}
const sendEventDetails = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../pages/event-details.html'))
}

module.exports = router;