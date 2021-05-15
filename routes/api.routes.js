const express = require('express')
const router = express.Router()
const coinApi = require('./api/coingecko')

router.get('/coin/list', coinApi.getCoinList)
router.get('/coin/:coinId', coinApi.getCoinInfo)
router.get('/coin/all', coinApi.getCoinPurchaseHistory)
router.post('/coin/add', coinApi.postNewCoin)

module.exports = router;
