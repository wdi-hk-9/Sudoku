$(function(){

  var game = new Sudoku();
  // game.print();
  // game.swapRows(game.board[0] , game.board[1]);

  var hideRandomCell = function(){
    var cells = $('td')
      for (var i = 0; i < 80; i++) {
        var randIndex1 = Math.floor(Math.random() * 81);
        cells.eq(randIndex1).html("");
      };
    $('td:empty').on('click' , inputNum); // Play Game
  };

  var createGame = function(){
    for (var i = 0; i < 9; i++){
      var htmlRow = '<tr id="row-' + (i+1) +'">';
        for (var j = 0; j < 9; j++) {
          htmlRow += '<td data-num ="' + (j+1) + '" value="' + game.board[i][j] + '">' + game.board[i][j] + '</td>';
        };
      $("#row-"+(i+1)).replaceWith(htmlRow);
    }
    hideRandomCell();
  };

  var inputNum = function (event){
    var originalValue = $(this).html();
    $(this).html('<input type="text" autofocus></input>');
    $(this).children().val(originalValue);
    $(this).off();
    $('td input').on('keyup', checkResults);

  };

  //Unfocus
  var inputtedtestNum = function (event){
    $(this).parent().on('click', inputNum);
    var inputtedNum = $(this).val();
    $(this).parent().html(inputtedNum);
  };

  var checkResults = function(event){
    var answer = parseInt($('td input').val());
    console.log(answer);
    // if (num == valueCompare){
    //   console.log("Yeah")
    // } else {console.log("No")}
  };

  // Create Game
  $('#newGame').on('click' , createGame);

  // Unfocus
  $('document').on('blur' , 'td input', inputtedtestNum);

  // Show the Solution
  var showSolution = function (){
    var cells = $('td');
    for (var i = 0; i < cells.length; i++) {
      var x = cells.eq(i).attr("value");
      cells.eq(i).html(x);
    }
  };
  $('#solution').on('click' , showSolution);
});