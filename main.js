// tic tac toe game
  // game function returns board
  // each play function will make a move on board
  // play functions need to check if there are any x's or 0's in other rows
  // 

//game function returns board
module.exports = {
  Game: function() {
    //create board
    this.board = [[0,0,0],[0,0,0],[0,0,0]];
  },       
};



//add validation functions to ensure that other moves are not allowed
module.exports.Game.prototype.validateMove = function(board, player, move) {
    //iterate over board 
    if (board) {
      // check if piece already exists
      if (board[move[0]][move[1]]) {
        return false;
      }
    }

    return true;             
}

// add play functions to board
// player1 and player2 both make moves. 
  // Player 1 places 'X' and player 2 places 'O'
module.exports.Game.prototype.makeMove = function(board, player, move) {
  
  board = board || new module.exports.Game();
  
  var piece = player === 'player1' ? 'X' : 'O';


  // move test case there for test.js ability to run file without move
  if (move) {
    //run validation check to ensure that space is note occupied by another piece
    if(module.exports.Game.prototype.validateMove(board,player,move)) {
      this.board[move[0]][move[1]] = piece;
    } 
  }
   
  return this.board;
};








