const User = require(__dirname + '/../models/user');
const basicHTTP = require('../lib/basic-http');
const bearer = require('../lib/bearer-auth');
const jsonParser = require('body-parser').json();

const authRouter = module.exports = require('express').Router();

authRouter.post('/signup', jsonParser, (req, res, next) => {
 
  console.log('req.body is ', req.body);
  if(!req.body.username || !req.body.password || !req.body.email) return next(400);

  User.findOne({ username: req.body.username })
  .then(userExists => {
    if(userExists) return next(400);
  }).catch(500);

  const password = req.body.password;
  delete req.body.password;

  (new User(req.body)).generateHash(password)
    .then(user => {
      console.log('hiiiiiiiiiiii')
      user.save()
      let token = user.generateToken();
      res.cookie('auth', token, { maxAge: 900000 });
      res.send({user,token});
    })
    .catch(400);

});

authRouter.get('/login', basicHTTP, (req, res, next) => {
   console.log('I definitely should not be here')
    User.findOne({username: req.auth.username})
      .then(user => {
        if (!user) { 
          next({statusCode: 403, message: 'Invalid Username'});
        }
        user.verifyPassword(req.auth.password)
          .then(verified => {
            if(verified) {
              let token = verified.generateToken();
              res.cookie('auth', token, { maxAge: 900000 });
              res.send({verified, token});
            } 
            else(next(401));
          });
      })
      .catch(next);
  
});


  