var fs = require('fs');

function Parser(fileName) {
  this.data = fs.readFileSync(fileName, 'utf-8');
};

Parser.prototype.tokenize = function() {
  var hash = {};

  this.data
   .split('\n')
   .join(' ')
   .toLowerCase()
   .trim()
   .split(' ')
   .forEach(function(word) {
     hash[word] = hash[word] + 1 || 1;
   });

   return hash
};

Parser.prototype.averageLength = function() {
  return this.data
    .trim()
    .split('\n')
    .reduce(function(acc, curr, index, arr) {
      if(index === arr.length - 1) {
        return (acc + curr.length) / arr.length
      } else {
        return acc + curr.length
      }
    }, 0);
};

Parser.prototype.orgChart = function() {
  this.data = this.data.split('\n');
  var org = {},
      currentManager;

  this.data.forEach(function(person) {
    if(person.trim().length === 0) return;

    if(person[0] != ' ') {
      org[person] = [];
      currentManager = person;
    } else {
      org[currentManager].push(person.trim());
    }
  });

  return org;
}

module.exports = Parser;
