'use strict'

const main = require('../main/main');

describe('taxi fee', function () {
    it('return 0 yuan given 0 km and 0 min',function () {
      var result = main('行驶0公里, 等待0分钟');
      expect(result).toEqual('一共0元');
    });
    it('return 6 yuan given 2 km and 0 min',function () {
      var result = main('行驶2公里, 等待0分钟');
      expect(result).toEqual('一共6元');
    });
    it('return 9 yuan given 5.5 km and 0 min',function () {
      var result = main('行驶5.5公里, 等待0分钟');
      expect(result).toEqual('一共9元');
    });
    it('return 19 yuan given 15.6 km and 0 min',function () {
      var result = main('行驶15.6公里, 等待0分钟');
      expect(result).toEqual('一共19元');
    });
    it('return 29 yuan given 22.3 km and 5.5 min',function () {
      var result = main('行驶22.3公里, 等待5.5分钟');
      expect(result).toEqual('一共29元');
    });
});
