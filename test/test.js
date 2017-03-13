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
  it('game should return a 3 x 3 matrix of arrays', ()=>{
    var gameFunction = game.game;
    var gameFunctionResult = gameFunction();

    gameFunctionResult.length.should.equal(3);
    for (var i = 0; i < gameFunctionResult.length; i++) {
      gameFunctionResult[i].length.should.equal(3);
    }

  });

})