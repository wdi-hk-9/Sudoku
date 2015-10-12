$(function(){

  var game = new Sudoku();

  game.print();

  game.swapRows(game.board[0] , game.board[1]);

  game.print();

    // $('thead > tr > td').html(game.board[0][i]);
});