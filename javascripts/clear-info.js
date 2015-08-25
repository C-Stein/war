define(function(require) {


  return {
    clear: function(){
        $("#player1CardImg").html("<img src=/images/cardBack.jpg width=226 heighth=314>");
        $("#player1Card").text("");
        $("#player2CardImg").html("<img src=/images/cardBack.jpg width=226 heighth=314>");
        $("#player2Card").text("");
        $("#player1Score").text("");
        $("#player2Score").text("");
        $("#turns").text("");
        $("#result").text("Let's Play!");
     
    }

  };
});