define(function(require) {
    var $ = require("jquery");
    var _ = require("lodash");
    var newGame = require("newGame");
    var play = require("play");
    var results = require("results");

    var deckID;
    var player1Score = 0;
    var player2Score = 0;
    


    $("#newGame").on("click", function() {
    
        newGame.newGame().then(function(data){
          deckID = data.deck_id;
          console.log("deckID", deckID);

        });
  
    });

    // $("#searchText").keyup(function(event){
    //   if(event.which == 13){
    //     $("#search").click();
    //   }
    // });



    

    $("#play").on("click", function() {

      play.play(deckID).then(function(data){
        console.log("play data", data);
        $("#player1CardImg").html("<img src='" + data.cards[0].image + "'>");
        $("#player1Card").text(data.cards[0].value + " of " + data.cards[0].suit);
        $("#player2CardImg").html("<img src='" + data.cards[1].image + "'>");
        $("#player2Card").text(data.cards[1].value + " of " + data.cards[1].suit);
        $("#player1Score").text(player1Score);
        $("#player2Score").text(player2Score);
        $("#turns").text((data.remaining)/2);
        var winner = results.results(data);
        if (winner == 1) {
          player1Score += 2;
        } else if (winner == 2) {
          player2Score += 2;
        } 

        console.log("player1Score", player1Score);
        console.log("player2Score", player2Score);

        $("#player1Score").text(player1Score);
        $("#player2Score").text(player2Score);
      });
      

    

    });









});