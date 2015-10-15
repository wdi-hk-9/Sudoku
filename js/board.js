'use strict';

var Sudoku = function() {
  this.secondsLeft = 0;
  this.timer = null;
  // Initialize new board
  this.board = [[1,2,3,4,5,6,7,8,9],
                [4,5,6,7,8,9,1,2,3],
                [7,8,9,1,2,3,4,5,6],
                [2,3,4,5,6,7,8,9,1],
                [5,6,7,8,9,1,2,3,4],
                [8,9,1,2,3,4,5,6,7],
                [3,4,5,6,7,8,9,1,2],
                [6,7,8,9,1,2,3,4,5],
                [9,1,2,3,4,5,6,7,8]];
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
