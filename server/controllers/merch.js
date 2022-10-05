const path = require("path");

const sendMerchHomePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../pages/merch.html'))
}
const sendMerchStorePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../pages/merch-store.html'))
}
const sendMerchItem = (req, res) => {
    const {itemID} = req.params 
    res.send(`<p>item ${itemID}</p>`)
}

module.exports = {
    sendMerchHomePage,
    sendMerchStorePage,
    sendMerchItem
};