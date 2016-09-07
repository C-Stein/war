define(function(require) {
  var Q = require("q");
  var results = require("results");
  var winner;


  return {
    war: function(deckID){

        $("#result").text("A tie? It's WAR!");
        $("#player1Score").text("score? We're playing war!");
        $("#player2Score").text("score? We're playing war!");
        console.log("war!");
        
        

      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=8",
       
      }).done(function(data){
     console.log("ajax tie done");

    $("#player1CardImg").html("<img src=images/cardBack.jpg width=84 heighth=113>" + 
                              "<img src=images/cardBack.jpg width=84 heighth=113>" +
                              "<img src=images/cardBack.jpg width=84 heighth=113>" +
                              "<img src='" + data.cards[0].image + "'>");
    $("#player1Card").text("");
    $("#player2CardImg").html("<img src=images/cardBack.jpg width=84 heighth=113>" +
                              "<img src=images/cardBack.jpg width=84 heighth=113>" +
                              "<img src=images/cardBack.jpg width=84 heighth=113>" +
                              "<img src='" + data.cards[1].image + "'>");

    $("#player1Card").text(data.cards[0].value + " of " + data.cards[0].suit);
    $("#player2Card").text(data.cards[1].value + " of " + data.cards[1].suit);
    $("#turns").text((data.remaining)/2);

      winner = results.results(data);
      });
      
      return winner;
      
     
    }

  };
});










