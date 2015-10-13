'use strict';

var Sudoku = function() {

  // Initialize new board
  this.board = [];
  this.board.push( [1,2,3, 4,5,6, 7,8,9] );
  this.board.push( [4,5,6, 7,8,9, 1,2,3] );
  this.board.push( [7,8,9, 1,2,3, 4,5,6] );

  this.board.push( [2,3,4, 5,6,7, 8,9,1] );
  this.board.push( [5,6,7, 8,9,1, 2,3,4] );
  this.board.push( [8,9,1, 2,3,4, 5,6,7] );

  this.board.push( [3,4,5, 6,7,8, 9,1,2] );
  this.board.push( [6,7,8, 9,1,2, 3,4,5] );
  this.board.push( [9,1,2, 3,4,5, 6,7,8] );

};

// Print Sudoku
Sudoku.prototype.print = function(){
  this.board.forEach(function(row,idx){
    var mini_row = row[0] + " " + row[1] + " " + row[2] + "   ";
    mini_row +=    row[3] + " " + row[4] + " " + row[5] + "   ";
    mini_row +=    row[6] + " " + row[7] + " " + row[8];
    console.log(mini_row) ;
    if (idx === 2 || idx === 5 ) {
      console.log('---');
    }
  })
}

// Transformation - Swap Rows between sections
Sudoku.prototype.swapRows = function(row1, row2){
  var tmp = row1;
  row1 = row2;
  row2 = tmp;
  this.board[0] = row1;
  this.board[1] = row2;
  // this.print();
};

// Hide Sudoku Elements
Sudoku.prototype.hideElements = function(){
  //Mask random elements in array
  var maskBoard = this.board
  for (var i = 0; i < 40; i++) {
    var randIndex1 = Math.floor(Math.random() * 9);
    var randIndex2 = Math.floor(Math.random() * 9);
    var del = delete maskBoard[randIndex1][randIndex2];
  }
    this.print(maskBoard);

};