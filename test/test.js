var chai = require('chai');
var should = chai.should();
var game = require('../main');

describe('intitial tests', () => {
  it(' "chai should" work', () => {
    var should;
  })
  it('game should be a function', () => {
    var gameFunction = game.Game;
    gameFunction.should.be.a('function'); 
  });

  it('game should return a 3 x 3 matrix of arrays', ()=>{
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction();

    gameFunctionResult.board.length.should.equal(3);
    for (var i = 0; i < gameFunctionResult.board.length; i++) {
      gameFunctionResult.board[i].length.should.equal(3);
    }

  });

  it('play function should be a function added to the Game prototype', () => {
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction();
    gameFunctionResult.play.should.be.a('function');  
  });

  it('play function should take in a board as a parameter and return an empty board if no arguments are passed in', () => {
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction().board;
    console.log(gameFunctionResult);
    gameFunctionResult.length.should.equal(3);

    for (var i = 0; i < gameFunctionResult.length; i++) {
      for (var j = 0; j < gameFunctionResult[i].length; j++) {
        gameFunctionResult[i][j].should.equal(0);
      }
    }
   
  
  });



})