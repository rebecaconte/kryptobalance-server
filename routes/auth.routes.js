const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs'); 

const UserModel = require('../models/User.model');

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);







  
})