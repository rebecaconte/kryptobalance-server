const CoinGecko = require('coingecko-api'),
      CoinGeckoClient = new CoinGecko(),
      CoinModel = require('../../models/Coin.model'),
      Moment = require('moment');

module.exports = {
  // Get all coins information
  getCoinList: async (req, res, next) => {
    let data = null
    try {
        data = await CoinGeckoClient.coins.list()
    } catch(e) {
      console.log("Error calling getCoinList: ", e)
      res.status(500).send(e);
    }

    res.status(200).send({
      data: data
    })
  },
  getCoinInfo: async (req, res, next) => {
    const {coinId} = req.params

    let data = null;
    try {
      data = await CoinGeckoClient.coins.fetch(coinId, {
        tickers: false,
        market_data: false,
        community_data: false,
        developer_data: false,
        localization: false,
        sparkline: false
      });
    } catch(e) {
      console.log("Error calling getCoinInfo: ", e)
      res.status(500).send(e);
    }

    res.status(200).send({
      data: data
    });
  },
  // Get coin purchase history from database to show on coin graph
  getCoinPurchaseHistory: async (req, res, next) => {

    // TODO: RETRIEVE COINS BY USER WHICH IS BEING RETRIEVED THROUGH SESSION!

    CoinModel.find()
       .then((coins) => {
         console.log(coins);
          res.status(200).json(coins)
       })
       .catch((err) => {
          res.status(500).json({
             error: 'Could not retrieve coin purchase history',
             message: err
          })
       })
  },

  // get growth of investment at HomePage
  getCoinGrowth: async (req, res, next) => {
    const {coinId, date, currency} = req.params
    let dateOfPurchase = date.split('-')
    dateOfPurchase = Moment([dateOfPurchase[2], dateOfPurchase[1] - 1, dateOfPurchase[0]]);
    const dateNow = Moment();
    const days = dateNow.diff(dateOfPurchase, 'days');
    
    let data = null;
    try {
      data = await CoinGeckoClient.coins.fetchMarketChart(coinId, {
        days: days,
        vs_currency: currency
      });
    } catch(e) {
      console.log("Error calling getCoinGrowdth: ", e)
      res.status(500).send(e);
    }
    res.status(200).send({
      data: data
    });
  },



  // Save coin purchase history
  postNewCoinPurchase: async (req, res, next) => {

    const {name, amountInvested, currencyUsed, user} = req.body;
    let purchaseDate = req.body.purchaseDate;

    // Fetching price of coin by date
    try {
      const coin = await CoinGeckoClient.coins.fetchHistory(name, {
        date: purchaseDate,
        localization: true
      });
      const price = coin.data.market_data.current_price

      purchaseDate = Moment(purchaseDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
      // Creating coin purchase based on price of date from api
      CoinModel.create({ name, purchaseDate, amountInvested, currencyUsed, price, user })
        .then((response) => {
           res.status(200).json(response)
        })
        .catch((err) => {
           res.status(500).json({
              error: 'Something went wrong during adding a coin purchase date',
              message: err
           })
        })
    } catch(e) {
      console.log("Error getting price for date of coin purchase: ", e)
      res.status(500).send(e);
    }
  }
}
