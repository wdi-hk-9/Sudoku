$(function(){

  var timer;
  var game = new Sudoku();
  var secondsLeft = 0;
  var mySound = new buzz.sound("0477.ogg");

  // game.print();
  // game.swapRows(game.board[0] , game.board[1]);

  var startGame = function(difficulty){
    var cells = $('td')
    for (var i = 0; i < difficulty; i++) {
      var randIndex1 = Math.floor(Math.random() * 81);
      cells.eq(randIndex1).html("");
    };
    $('td:empty').html('<input type="text"></input>');
    $('td input').on('keyup', checkResults);
    startTimer();
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
    for (var i = 0; i < 9; i++){
      var htmlRow = '<tr id="row-' + (i+1) +'">';
      for (var j = 0; j < 9; j++) {
        htmlRow += '<td data-num ="' + (j+1) +'"value="' + game.board[i][j] + '">' + game.board[i][j] + '</td>';
      }
      $("#row-"+(i+1)).replaceWith(htmlRow);
    }
    startGame(difficulty);
  };

  var checkResults = function(){
    var input = $(this).val();
    var solution = $(this).parent().attr('value');
    if (input == solution){
      $(this).val(input);
    } else {
      mySound.play();
      $(this).effect('shake');
      $(this).val('');
      secondsLeft = secondsLeft + 10;
      $("#myModal").modal()
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
      clearInterval(timer);
      console.log("Game Completed");
      $('#timeWin').html(secondsLeft);
      $("#myModalwin").modal()
    } else {
      console.log("Game Not Completed");
    }
  };

// Set Timer Starts
  var everySecond = function(){
    secondsLeft++
    $('#time-increase').html(secondsLeft);
  };
  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };
// Set Timer End

// Create Game
  $('#easy').on(  'click' , function(e){
    e.preventDefault()
    createGame(3)
    $('#game').tab('show')
  });
  $('#medium').on(  'click' , function(e){
    e.preventDefault()
    createGame(30)
    $('#game').tab('show')
  });
  $('#hard').on(  'click' , function(e){
    e.preventDefault()
    createGame(50)
    $('#game').tab('show')
  });

  $('#solution').on('click' , showSolution);
});