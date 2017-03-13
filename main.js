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
module.exports.Game.prototype.play = function(board, player, move) {
  //allow for player parameter that will dictate weather we add an 'X' or an 'O' to the board
  board = board || new module.exports.Game();

  //check if player1
    //if so check if any moves are not permitted
  return board;
};

//add validation functions to ensure that other moves are not allowed

module.exports.Game.validateMove = function(board, player) {
      
}




