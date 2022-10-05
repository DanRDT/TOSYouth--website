const express = require('express');
const router = express.Router(); 

const {
    sendMerchHomePage,
    sendMerchStorePage,
    sendMerchItem
} = require('../controllers/merch.js')

router.get("/", sendMerchHomePage)
router.get("/store", sendMerchStorePage)
router.get('/store/:itemID', sendMerchItem)

module.exports = router;