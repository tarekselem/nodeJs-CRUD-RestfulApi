const winston = require('winston');
require('winston-papertrail').Papertrail;

var logger = new winston.transports.Papertrail({
    host: 'logs7.papertrailapp.com',
    port: 41108,
    handleExceptions: true
});

logger.on('error',(err) =>{

});

module.exports = logger;
