'use strict'

var split = function(drivingString) {
  let arr = drivingString.match(/\d+(\.\d+)?/g).map((m) => parseFloat(m))
  return {distance: arr[0], waitingTime: arr[1]};
};

var computePrice = function(drivingInfo) {
  return Math.round(drivingInfo.waitingTime * 0.25 +
  ((drivingInfo.distance > 8)? 10 + (drivingInfo.distance - 8) * 1.2
  :(drivingInfo.distance > 2)? 6 + (drivingInfo.distance - 2) * 0.8
  : (drivingInfo.distance > 0)? 6 : 0));
}

var print = function(price) {
  return '一共' + price + '元';
}

module.exports = function main(drivingString) {
    var drivingInfo = split(drivingString);
    var price = computePrice(drivingInfo);
    return print(price);
};
