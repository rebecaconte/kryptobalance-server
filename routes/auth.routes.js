const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');

const UserModel = require('../models/User.model');

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  //user needs to insert info to have access
  if (!username || !email || !password) {
    res.status(500)
      .json({
        errorMessage: 'Please enter username, email and password'
      });
    return;
  }

  //email needs a valid format
  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  if (!myRegex.test(email)) {
    res.status(500).json({
      errorMessage: 'This seems to be not a valid email format!'
    });
    return;
  }

  //requirements of the password
  /* const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  if (!myPassRegex.test(password)) {
    res.status(500).json({
      errorMessage: 'Password requires 8 characters, a number and an Uppercase alphabet'
    });
    return;
  }*/

  //encrypt password
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  UserModel.create({ name: username, email, passwordHash: hash })
    .then((user) => {
      user.passwordHash = "***";
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 11000) {

        res.status(500).json({
          erroMessage: 'username or email entered is already taken! Please insert another one',
          message: err,
        })
      }
      else {
        console.log(err);
        res.status(500).json({
          errorMessage: 'Something went wrong! Please try again!',
          message: err,
        })
      }
    });
  })

  router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    //user needs to insert info to have access
    if (!email || !password) {
      res.status(500).json({
        error: 'Please enter Username. email and password',
      })
      return;
    }
    //email needs a valid format
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
      res.status(500).json({
        error: 'Email format seems not to be correct',
      })
      return;
    }


  //check if user already exists on the DB

  UserModel.findOne({ email })
    .then((userData) => {
      bcrypt.compare(password, userData.passwordHash)
        .then((ifMatch) => {
          if (ifMatch) {
            userData.passwordHash = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData)
          }
          else {
            res.status(500).json({
              error: "Please check your password!",
            })
            return;
          }
        })
        .catch(() => {
          res.status(500).json({
            error: "Email format doesn't seem to be correct",
          })
          return;
        })
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Email does not exist',
        message: err
      })
      return;
    });

})

//check if user is logged
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    next()
  }
  else {
    res.status(401).json({
      message: "User has no access to this page.",
      code: 401,
    })
  };
};


//auth routes
router.get("/dashboard", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.get("/:coinId", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.post("/addcoin", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.post("/editcoin", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

//logout route
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.status(204).json({});
})


module.exports = router;