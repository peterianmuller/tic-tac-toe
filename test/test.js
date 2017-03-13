var chai = require('chai');
var should = chai.should();
var game = require('../main');

describe('intitial tests', () => {
  it(' "chai should" work', () => {
    var should;
  })
  it('game should be a function', () => {
    var gameFunction = game.game;
    gameFunction.should.be.a('function'); 
  });

})