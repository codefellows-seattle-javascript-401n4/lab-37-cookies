'use strict';


const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
  console.log('WHY AM I GETTING CALLED?????')
  
  // if(!req.headers.authorization){
  //   console.log('You must authorize!')
  //   next(401);
  // }

  let token = req.headers.Cookie.split('auth=')[1];
  console.log('token is ', token);
  if(!token){
    return next(401);
  }

  let secret = process.env.APP_SECRET || 'aKJfjk4927lkjfdpp9';

  //If token is bad, return 401
  let decodedToken = jwt.verify(token, secret, (err, verifiedJwt) => {

    return err ? next(401) : verifiedJwt;

  });
  req.userId = decodedToken.id;
  next();

};
