require('dotenv').config();

require('./_server/server.js').start(process.env.PORT || 3000);
