'use strict';

require('dotenv').config();
require('./server/server.js').start(process.env.PORT || 3000);
