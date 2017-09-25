$(document).ready(function(){
    $('.box').on('click', clickCounter);
    $('#reset').on('click', resetButton);

});

var clickOnGame = 0;
var player1 = 'X';
var player2 = "O";
var winner1 = 0;
var winner2 = 0;
// var winner = false;
function clickCounter() {

console.log('text', $(this).text());

  if($(this).text() == 'X'){

      alert("Already taken silly, choose another square.");
      return;

  } else if ($(this).text() == 'O') {

    alert("Already taken silly, choose another square.");
    return;

  } else {
    clickOnGame++;

  }

  if(clickOnGame % 2 !== 0){
      $(this).text(player1)
     } else {
        $(this).text(player2)
     }
     checkWinner();

};

function winCounter(){
  if(clickOnGame % 2 !== 0){
      winner1++
      console.log('winner', winner1);
      $('#player1').text(winner1)

     } else {
      winner2++
      console.log('winners', winner2);
      $('#player2').text(winner2)

     }

  }
  function resetButton(){
    $('#1').text('');
    $('#2').text('');
    $('#3').text('');
    $('#4').text('');
    $('#5').text('');
    $('#6').text('');
    $('#7').text('');
    $('#8').text('');
    $('#9').text('');
    clickOnGame = 0;

  }

function checkWinner() {
  console.log('checkWinner');
  if ( $('#1').text() == 'X'  && $('#2').text() == 'X' && $('#3').text() == 'X' ){
    winCounter();
    alert('win' && player1);
    return;

  } else if( $('#4').text() == 'X'  && $('#5').text() == 'X' && $('#6').text() == 'X'){
    winCounter();
    alert('win');
      return;


  } else if ( $('#7').text() == 'X'  && $('#8').text() == 'X' && $('#9').text() == 'X'){
    winCounter();
    alert('win');
      return;

  } else if ( $('#1').text() == 'X'  && $('#4').text() == 'X' && $('#7').text() == 'X'){
    winCounter();
    alert('win');
      return;

  } else if ( $('#2').text() == 'X'  && $('#5').text() == 'X' && $('#8').text() == 'X'){
    winCounter();
    alert('win');
      return;

  } else if ( $('#3').text() == 'X'  && $('#6').text() == 'X' && $('#9').text() == 'X'){
    winCounter();
    alert('win');
      return;

  } else if ( $('#1').text() == 'X'  && $('#5').text() == 'X' && $('#9').text() == 'X'){
    winCounter()
    alert('win');
      return;

  } else if ( $('#3').text() == 'X'  && $('#5').text() == 'X' && $('#7').text() == 'X'){
    winCounter()
    alert('win');
      return;

  }

  if ( $('#1').text() == 'O'  && $('#2').text() == 'O' && $('#3').text() == 'X' ){
    winCounter()
    alert('win');
      return;

  } else if( $('#4').text() == 'O'  && $('#5').text() == 'O' && $('#6').text() == 'O'){
    winCounter()
    alert('win');
      return;


  } else if ( $('#7').text() == 'O'  && $('#8').text() == 'O' && $('#9').text() == 'O'){
    winCounter()
    alert('win');
      return;

  } else if ( $('#1').text() == 'O'  && $('#4').text() == 'O' && $('#7').text() == 'O'){
    winCounter()
    alert('win');
      return;

  } else if ( $('#2').text() == 'O'  && $('#5').text() == 'O' && $('#8').text() == 'O'){
    winCounter()
    alert('win');
      return;

  } else if ( $('#3').text() == 'O'  && $('#6').text() == 'O' && $('#9').text() == 'O'){
    winCounter()
    alert('win');
      return;

  } else if ( $('#1').text() == 'O'  && $('#5').text() == 'O' && $('#9').text() == 'O'){
    winCounter()
    alert('win');
      return;

  } else if ( $('#3').text() == 'O'  && $('#5').text() == 'O' && $('#7').text() == 'O'){

    winCounter()
    alert('win');
      return;

  } else if( clickOnGame >= 9){
    alert('cat won game')
    return;

  }
};
