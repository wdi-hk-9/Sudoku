'use strict';

var Board = function() {
this.array =[];
}

// Initalise Soduku
Board.prototype.intialiseSoduku = function(){
    for (var i = 0; i < 9; i++)
      for (var j = 0; j < 9; j++)
        this.array[i * 9 + j] = (i*3 + Math.floor(i/3) + j) % 9 + 1;
}

// Transformation

Board.prototype.swapRows = function(){



}
