$(function(){

  var game = new Sudoku();
  // game.print();
  // game.swapRows(game.board[0] , game.board[1]);

  var hideRandomCell = function(difficulty){
    var cells = $('td')
    for (var i = 0; i < difficulty; i++) {
      var randIndex1 = Math.floor(Math.random() * 81);
      cells.eq(randIndex1).html("");
    };
    $('td:empty').html('<input type="text"></input>');
    $('td input').on('keyup', checkResults);
  };

    // Show the Solution
  var showSolution = function (){
    var cells = $('td');
    for (var i = 0; i < cells.length; i++) {
      var x = cells.eq(i).attr("value");
      cells.eq(i).html(x);
    }
  };

  var createGame = function(difficulty){
    console.log('heyyy');
    for (var i = 0; i < 9; i++){
      var htmlRow = '<tr id="row-' + (i+1) +'">';
      for (var j = 0; j < 9; j++) {
        htmlRow += '<td data-num ="' + (j+1) +'"value="' + game.board[i][j] + '">' + game.board[i][j] + '</td>';
      }
      $("#row-"+(i+1)).replaceWith(htmlRow);
    }
    hideRandomCell(difficulty);
  };

  var checkResults = function(){
    var input = $(this).val();
    var value = $(this).parent().attr('value');
    if (input == value){
      $(this).val(input);
      console.log("Right Answer!");
    } else {
      alert("Wrong Answer! Please Try Again.");
      $(this).val('');
    }
    checkgameCompleted();
  };

  var checkgameCompleted = function (){
    var allInputsWithText = true;
    for (i=0; i < $('input').length; i++) {
      if ($($('input')[i]).val() == "") {
        allInputsWithText = false;
      }
    }
    if (allInputsWithText) {
      console.log("Game Completed");
    } else {
      console.log("Game Not Completed");
    }
  };

  // Create Game
  $('#easy').on(  'click' , function(){ createGame(3) });
  $('#medium').on('click' , function(){ createGame(30) });
  $('#hard').on(  'click' , function(){ createGame(50) });
  $('#solution').on('click' , showSolution);
});