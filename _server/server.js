'use strict';

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');


const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mConfig = {useMongoClient:true};
const mURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/user'

mongoose.connect(mURI, mConfig);

const express = require('express');
const server = module.exports = express();
server.use(cors());
server.use(require('./routes.js'));

let status = false;

module.exports = {
  start: (port)=> {
    if (status) return 'Server already up.'
    server.listen(port, ()=>{
      status = true;
      console.log('server is running on ' + port);
    });
  },
  stop: ()=>{
    server.close(()=>{
      console.log('Server going down.');
    });
  },
};
