const express = require('express')
const router = express.Router()
const CoinGecko = require('coingecko-api')
const CoinGeckoClient = new CoinGecko()
const CoinModel = require('../models/Coin.model')
const Moment = require('moment')

// Get coin purchase history from database to show on coin graph
router.get('/coin/growth/:coinId/:currency/:date', (req, res) => {
  const { coinId, date, currency } = req.params
    // date ex. 2019-10-05
    let dateOfPurchase = date.split('-')
    // 2019-10-05 -> [2][1][0]
    dateOfPurchase = Moment([dateOfPurchase[2], dateOfPurchase[1] - 1, dateOfPurchase[0]]);
    const dateNow = Moment();
    const days = dateNow.diff(dateOfPurchase, 'days');
    
    CoinGeckoClient.coins.fetchMarketChart(coinId, {
      days: days,
      vs_currency: currency
    })
    .then((data) => {
      res.status(200).send({
        data: data
      });
    })
    .catch((e) => {
      console.log("Error calling getCoinGrowdth: ", e)
      res.status(500).send(e);
    })
})

// get growth of investment at dashboard
router.get('/coin/:userId/history/all', (req, res) => {
  const { userId } = req.params

  CoinModel.find({user: userId})
  .then((coins) => {
    res.status(200).json(coins)
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Could not retrieve coin purchase history',
      message: err
    })
  })
})

router.get('/coin/list/all', (req, res) => {

  CoinGeckoClient.coins.list()
    .then((data) => {
      res.status(200).send({
        data: data
      })
    })    
    .catch ((e) => {
      console.log("Error calling getCoinList: ", e)
      res.status(500).send(e);
    })
})

router.get('/coin/:coinId', (req, res) => {
  const { coinId } = req.params

  CoinGeckoClient.coins.fetch(coinId, {
    tickers: false,
    market_data: false,
    community_data: false,
    developer_data: false,
    localization: false,
    sparkline: false
  })
  .then((data) => {
    res.status(200).send({
      data: data
    });
  })
  .catch ((e) => {
    console.log("Error calling getCoinInfo: ", e)
    res.status(500).send(e);
  })
})

router.post('/coin/add', (req, res) => {
  const { name, amountInvested, currencyUsed, user } = req.body;

    let purchaseDate = req.body.purchaseDate;
    // Fetching price of coin by date

    CoinGeckoClient.coins.fetchHistory(name, {
        date: purchaseDate,
        localization: false
      })
      .then((coin) => {
        const price = coin.data.market_data.current_price
        const image = coin.data.image.thumb
        const symbol = coin.data.symbol


        purchaseDate = Moment(purchaseDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
        // Creating coin purchase based on price of date from api


        CoinModel.create({ name, purchaseDate, amountInvested, currencyUsed, price, symbol, image, user })
          .then((response) => {
            res.status(200).json(response)
          })
          .catch((err) => {
            res.status(500).json({
              error: 'Something went wrong during adding a coin purchase date',
              message: err
            })
          })
      })
      .catch((e) => {
        console.log("Error getting price for date of coin purchase: ", e)
        res.status(500).send(e);
      }) 
})

module.exports = router;
