var expect = require('chai').expect;
var Parser = require('../parser');

describe('tokenize a string of text', function(){
  it('retuns a hash count of each word in the string', function(){
    var parser = new Parser('./data/test.txt');
    expect(parser.tokenize()).to.deep.equal({this: 3, counts: 3, a: 1, lot: 1});
  });
});

describe('#averageLength', function(){
  it('returns the average lenght of each line of text', function(){
    var parser = new Parser('./data/test.txt');
    expect(parser.averageLength()).to.equal(13);
  });
});

describe('orgChart', function(){
  it('returns an object with managers as the properties and a managers employees as its keys', function(){
    var parser = new Parser('./data/org.txt');
    expect(parser.orgChart()).to.deep.equal({
      'Boris Langworth': [
        'Daphney O\'Conner',
        'Chad Breitenberg'
      ],
      'Cody Schaden': [
        'Marcella Bashirian',
        'Kenneth Romaguera',
        'Lew Daugherty'
      ]
    });
  });

  it('returns an obj of obj org chart', function(){
    var parser = new Parser('./data/nested_org.txt');
    expect(parser.orgChart()).to.deep.equal({
      'Guido Mills': [
        { 'Marc Harber': [
          { 'Elton Corkery': [
              { 'Dixie Schulist': [] },
              { 'Jerel Cruickshank': [
                  {'Myrna Sauer': []}
                ]
              }
          ]}
        ]}
      ]});
  });
});
