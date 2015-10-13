$(function(){

  var game = new Sudoku();
  // game.print();
  // game.swapRows(game.board[0] , game.board[1]);
  var hideRandomCell = function(){
    var cells = $('td')
    for (var i = 0; i < 80; i++) {
      var randIndex1 = Math.floor(Math.random() * 81);
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
    }
  };

  var inputNum = function (event){
    var originalValue = $(this).html();
    $(this).html('<input type="text"></input>');
    $(this).children().val(originalValue);
    $("td input").css("width", "25px");
    $(this).off();
  };

  var test = function (event){
    $(this).parent().on('click', inputNum);
    var inputtedNum = $(this).val();
    $(this).parent().html(inputtedNum);
  }

  // var checkResults = function(){}
  //   //takes the input and check against the rules
  //   //check if unique in col,row and section
  //   var tmp = 1;
  //   for (var i = 0; i < 9; i++){

  //     for (var j = 0; j < 9; j++) {

  //     }
  //   };

  // Create Game
  $('#newGame').on('click' , createGame);
  // Show the Solution
  $('#solution').on('click' , showSolution);
  // On Click to select the input box
  $('td').on('click' , inputNum);
  // Unfocus
  $(document).on('blur' , 'td input', test);

});