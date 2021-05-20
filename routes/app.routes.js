const express = require('express')
const UserModel = require('../models/User.model')
const CoinModel = require('../models/Coin.model')
const router = express.Router()
const uploader = require('../config/cloudinary.config.js');


router.post('/profile/edit', (req, res, next) => {
  const { name, currency } = req.body
  let user = req.session.loggedInUser

  UserModel.findByIdAndUpdate(user._id, { name, currency }, { new: true })
    .then((user) => {
      user.passwordHash = "***";
      req.session.loggedInUser = user;
      res.status(200).json(user)
    })
    .catch(e => next(e))
})

//upload user image 
router.post('/upload', uploader.single("image"), (req, res, next) => {
  const user = req.session.loggedInUser
  console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  const image = req.file.path

  UserModel.findByIdAndUpdate(user._id, { image }, { new: true })
    .then((user) => {
      user.passwordHash = "***";
      req.session.loggedInUser = user;
      res.status(200).json(image)
    })
    .catch(e => next(e))
})

//delete coins
router.delete('/coins/delete/:coinName', (req, res, next) => {
  const user = req.session.loggedInUser
  const { coinName } = req.params

  CoinModel.deleteMany({ user: user._id, name: coinName }).then(function(response){
    res.status(200).json(response)
  }).catch(function(err){
    res.status(500).json({
      error: 'Could not delete all coins',
      message: err
    })
  })
});

module.exports = router;