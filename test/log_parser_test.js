var expect = require('chai').expect;
var Parser = require('../parser');

describe('LogParser', function() {
  describe('unique dates', function() {
    it('are returned', function() {
      var parser = new Parser('test.log');
      expect(parser.uniqueDates()).to.deep.equal(['2014-05-10', '2014-05-30', '2014-05-14', '2014-05-12', '2014-05-11']);
    });
  });

  describe('unique dates - count log lines', function() {
    it('are returned', function() {
      var parser = new Parser('test.log');
      expect(parser.dateLogCount()).to.deep.equal({
        '2014-05-10': 5,
        '2014-05-30': 1,
        '2014-05-14': 1,
        '2014-05-12': 1,
        '2014-05-11': 1
      });
    });
  });

  describe('log messages for each level for each day', function(){
    it('returrs an object showing the level count for each date', function(){
      var parser = new Parser('test.log');
      expect(parser.logLevelCount()).to.deep.equal({
        '2014-05-10': {'DEBUG': 2, 'INFO': 2, 'WARN': 1},
        '2014-05-30': {'INFO': 1},
        '2014-05-14': {'DEBUG': 1,},
        '2014-05-12': {'INFO': 1},
        '2014-05-11': {'WARN': 1},
      });
    });
  });
});
