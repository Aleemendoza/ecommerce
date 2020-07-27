const server = require('express').Router();
const passport = require('passport');
const {  OrderDetail } = require('../models/index.js');

isAuthenticated = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.user) return next();
  else
    return res.json({
      loggedin: false,
      isAdmin: false,
      message: 'User not authenticated',
    });
};
isAdmin = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.user.rol === 'admin') return next();
  else
    return res.json({
      loggedin: false,
      isAdmin: false,
      message: 'User is not admin',
    });
};

server.post('/changepassword');

server.post('/login', (req, res, next) => {
  //console.log(req.session, 'este es el req.body')
  passport.authenticate('local', (err, user, info) => {
    //console.log(user)
    if (err) {
      return res.json({
        success: false,
        message: err.message,
        info,
      });
    }
    if (!user) {
      //console.log('hasta aca llega 1')
      return res.json({
        success: false,
        info,
      });
    }
    //console.log('hasta aca llega 2')
    req.logIn(user, function(err) {
      if (err) {
        return res.json(err);
      }
      //console.log('hasta aca llega 3')
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        info,
        user,
      });
      //console.log('hasta aca llega 4')
    });
    //console.log('hasta aca llega 5')
  })(req, res, next);
  //console.log('hasta aca llega 6')
});

server.get('/logout', function(req, res) {
  req.logout();
  res.json({ message: 'Logged out!' });
});

server.post('/register');

server.get('/me', isAuthenticated, function(req, res) {
  res.status(200).json({
    loggedin: true,
    message: 'User is authenticated',
    user: req.user,
  });
});

server.put('/promote');

server.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
  }),
);

server.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

server.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  }),
);

server.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});


module.exports = server;
