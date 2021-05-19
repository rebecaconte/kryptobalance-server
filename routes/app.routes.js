const express = require('express')
const UserModel = require('../models/User.model')
const router = express.Router()


router.post('/profile/edit' , (req, res, next) => {
  const { name, currency, image } = req.body
  console.log(image);
  let user = req.session.loggedInUser

  UserModel.findByIdAndUpdate(user._id, {name, currency, image}, {new: true})
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(e => next(e)) 
})




module.exports = router;