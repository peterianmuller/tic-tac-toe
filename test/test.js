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

  it('makeMove function should be a function added to the Game prototype', () => {
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction();
    gameFunctionResult.makeMove.should.be.a('function');  
  });

  it('makeMove function should take in a board as a parameter and return an empty board if no arguments are passed in', () => {
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

  it('validateMove function should return a Boolean', () => {
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction();
    console.log('validateMoveResult is:', gameFunctionResult.makeMove());
    //validateMoveReault.should.be.a('boolean');
  });

  it('makeMove should update the board with an "X" for player1 and an "O" for player2', () => {
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction();
    var board = gameFunctionResult.board;

    //make sure only 0's on board before any moves
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board.length; j++) {
        board[i][j].should.equal(0);  
      }    
    }

    gameFunctionResult.makeMove(board, 'player1', [0,0]);
    board[0][0].should.equal('X');

    gameFunctionResult.makeMove(board, 'player2', [0,1]);
    console.log(board);
    board[0][1].should.equal('O');

  })

  it('makeMove should not update the board when there is already a piece on the board', () => {
    var gameFunction = game.Game;
    var gameFunctionResult = new gameFunction();
    var board = gameFunctionResult.board;

    //make sure only 0's on board before any moves
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board.length; j++) {
        board[i][j].should.equal(0);  
      }    
    }

    gameFunctionResult.makeMove(board, 'player1', [0,0]);
    board[0][0].should.equal('X');

    gameFunctionResult.makeMove(board, 'player2', [0,0]);
    console.log(board);
    board[0][0].should.equal('X');

  })







})