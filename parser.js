var fs = require('fs');

function Parser(fileName) {
  var relativeFile = './data/' + fileName;
  this.hash = {};

  this.data = fs.readFileSync(relativeFile, 'utf-8').split('\n');
}

Parser.prototype.uniqueDates = function(){
  var arr = [];
  for(var key in this.generateLogHash()) {
    arr.push(key);
  }

  return arr;
};

Parser.prototype.dateLogCount = function(){
  return this.generateLogHash();
};

Parser.prototype.generateLogHash = function(){
  var h = {};
  this.data.forEach(function(logLine) {
    var myRe = /\d{4}-\d{2}-\d{2}/;
    var date = myRe.exec(logLine);
    if(date){
      h[date] = h[date] + 1 || 1;
    }
  });

  return h;
};

Parser.prototype.logLevelCount = function() {
  var hash = {};

  this.data.forEach(function(line) {
    var date = line.substring(4, 14);
    if(!date) return;
    var level = line.substring(39, 44).trim();

    var levelObj = hash[date] || {};
    levelObj[level] = levelObj[level] + 1 || 1;

    hash[date] = levelObj;
  });

  return hash;
};

module.exports = Parser;
