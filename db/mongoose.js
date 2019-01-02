var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var uri = 'mongodb://Raghav:superman1@ds231723.mlab.com:31723/homeaway';
// var uri = 'mongodb://' +process.env.MONGO_USERNAME +':' + process.env.MONGO_PWD +'@ds231723.mlab.com:31723/homeaway';
// var uri = 'mongodb://localhost:27017/homeaway';

var options = {
    "server" : {
      "socketOptions" : {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000
      }
    },
    "replset" : {
      "socketOptions" : {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000
      }
    },
    "useNewUrlParser" : true
  }
mongoose.connect(uri, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = {mongoose};