//require('./bootstrap');
$.get( "/api/datauser", function( data ) {
    console.log(data);
  });

  /*$.get( "/api/token", function( data ) {
    console.log(data);
  });*/

$.ajaxSetup({
    headers:
    { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
});

//CHECK NEXT GAME AND INIT GAME
$.post( "/api/score", function( data ) {
    console.log(data);
});


function nextGame(completedCharacters){
     //TODO ALEX
     $.post( "/api/next",{score_game:JSON.stringify(completedCharacters)},
                          function( data ) {
                             console.log(data);
                        });
}

function endGame(completedCharacters){
    //TODO ALEX
     $.post( "/api/endgame",{score_game:JSON.stringify(completedCharacters)},
                             function( data ) {
                                console.log(data);
                                $("#end-game-screen").fadeIn();
                            });
}
