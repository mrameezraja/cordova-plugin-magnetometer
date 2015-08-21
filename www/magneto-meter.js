var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var MagnetoMeter = function(){

}

MagnetoMeter.prototype = {
  getMagnitude: function(successCallback, errorCallback){
      cordova.exec(successCallback, errorCallback, "MagnetoMeter", "getMagnitude", []);
  },
  watchMagnitude: function(successCallback, errorCallback){
      cordova.exec(successCallback, errorCallback, "MagnetoMeter", "watchMagnitude", []);
  },
  stop: function(successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, "MagnetoMeter", "stopWatch", []);
  }
}

module.exports = new MagnetoMeter();
