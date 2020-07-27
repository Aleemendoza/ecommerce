const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const session = require('express-session');
const { User } = require('./models/index.js');

require('./models');

const server = express();

server.name = 'API';
server.use(cors());

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(email, password, done) {
      console.log('email', email, 'password', password);
      User.findOne({ where: { email: email } })
        .then(user => {

          if (!user) {
            return done(null, false, {
              message: 'El correo electrónico no existe.',
            });
          }
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: 'La contraseña es incorrecta.',
            });
          }
          return done(null, user);
        })
        .catch(err => {
          if (err) {
            return done(err);
          }
        });
    },
  ),
);

server.use(session({
  secret: 'my secret string',
  resave: true,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());


server.use('/', routes);

server.use(express.static(path.join(__dirname, '/../public')));


//Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: '723368525150052',
      clientSecret: '1b9d3d6047e6654c4f66749063e38076',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: [
        'id',
        'displayName',
        'email',
        'birthday',
        'friends',
        'first_name',
        'last_name',
        'middle_name',
        'gender',
        'link',
      ],
    },
    function(accessToken, refreshToken, profile, done) {
      const user = profile._json;
      User.findOrCreate({
        where: { email: user.email },
        defaults: {
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
        },
      })
        .then(res => res[0])
        .then(user => done(null, user))
        .catch(err => done(err));
    },
  ),
);

//Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        '322865404060-sk6d0mpm68ppipighmta6ds855bdnrc9.apps.googleusercontent.com',
      clientSecret: 'N-2pmWYKJMZMKxL8uKZQVAc2',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile._json);
      const user = profile._json;
      User.findOrCreate({
        where: { email: user.emails[0].value },
        defaults: {
          firstName: user.name.givenName,
          lastName: user.name.familyName,
          email: user.emails[0].value,
        },
      })
        .then(res => res[0])
        .then(user => done(null, user))
        .catch(err => done(err));
    },
  ),
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

server.use(session({ secret: 'my secret string' }));
server.use(passport.initialize());
server.use(passport.session());

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
