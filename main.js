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

// add play functions to board
// player1 and player2 both make moves. 
  // Player 1 places 'X' and player 2 places 'O'
module.exports.Game.prototype.makeMove = function(board, player, move) {
  board = board || new module.exports.Game();
  
  //check if player1
  //if so check if any moves are not permitted
    if (player === 'player1') {
      //player one makes a move
      this.board[move[0]][move[1]] = 'X';
    } else {
      this.board[move[0]][move[1]] = 'O';
    }    

  return this.board;
};

//add validation functions to ensure that other moves are not allowed
module.exports.Game.validateMove = function(board, player, move) {

    var charToCheck;

    //Find out which character to check for
    if (player) {
      if (player === player1) {
        charToCheck = 'O';
      } else {
        charToCheck = 'X';
      }
    }  
    
    //iterate over board 
    if (board) {
      for ( var i = 0; i < board.length; i++) {
        for ( var j = 0; j < board[i].length; j++) {
        //check if charToCheck disallows move
        }
      }
    }  

    return true;             
}






