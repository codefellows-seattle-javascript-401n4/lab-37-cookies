const express = require('express');
const app = module.exports = express.Router();
const path = require('path');

const jwtAuth = require('./lib/JWT-Auth/index');


app.use(express.static(__dirname + '/../bundle/'));

router.get('/signup', jwtAuth.signup, (req, res, next) => {
    res.send(req.user);
    next();
});

router.get('/signin', jwtAuth.signin, (req,res,next) => {
    res.send(req.user);
    next();
});

router.get('/logout', jwtAuth.logout, (req, res, next) => {
    res.send(req.user);
    next();
});

router.get('/update', jwtAuth.update, (req, res, next) => {

    res.send(req.user);
    next();
});