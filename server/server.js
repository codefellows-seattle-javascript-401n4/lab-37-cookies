'use strict';

require('dotenv').config();

const cors = require('cors');

const express = require('express');
const app = module.exports = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user');

app.use(cors());

app.use(require(`./routes.js`));

let http = null;
let isRunning = null;

module.exports = {
   start: (port) => {
       if (isRunning) return "Server is running";
       http = app.listen(port, () => {
           isRunning = true;
       });
   },
   stop: () => {
       if (!isRunning) return "Server is shutdown";
       if (!http) return "Invalid Server";
       http.close(() => {
           http = null;
           isRunning = false;
           console.log('Server shutdown.');
       });
   }
}
