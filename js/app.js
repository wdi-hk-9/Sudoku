$(function(){

  var game = new Sudoku();

  // game.print();
  // game.swapRows(game.board[0] , game.board[1]);


  var hideRandomCell = function(){
    var cells = $('td')
    for (var i = 0; i < 60; i++) {
      var randIndex1 = Math.floor(Math.random() * 81);
      console.log(randIndex1)
      cells.eq(randIndex1).html("");
    }
  };

  var createGame = function(){
    for (var i = 0; i < 9; i++){
      var htmlRow = '<tr id="row-' + (i+1) +'">';
      for (var j = 0; j < 9; j++) {
        htmlRow += '<td data-num ="' + (j+1) + '" value="' + game.board[i][j] + '">' + game.board[i][j] + '</td>';
      };
      $("#row-"+(i+1)).replaceWith(htmlRow);
    };
    hideRandomCell();
  };

  var showSolution = function (){
    var cells = $('td');
    for (var i = 0; i < cells.length; i++) {
      var x = cells.eq(i).attr("value");
      cells.eq(i).html(x);
    };
  }

  // createGame();

  $('#newGame').on('click', createGame);
  $('#solution').on('click', showSolution);

});