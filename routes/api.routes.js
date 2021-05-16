const express = require('express')
const router = express.Router()
const coinApi = require('./api/coingecko')

router.get('/coin/growth/:coinId/:currency/:date', coinApi.getCoinGrowth)
router.get('/coin/history/all', coinApi.getCoinPurchaseHistory)
router.get('/coin/list/all', coinApi.getCoinList)
router.get('/coin/:coinId', coinApi.getCoinInfo)
router.post('/coin/add', coinApi.postNewCoinPurchase)

module.exports = router;
