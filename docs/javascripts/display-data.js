define(function(require) {


  return {
    display: function(data){
        $("#player1CardImg").html("<img src='" + data.cards[0].image + "'>");
        $("#player1Card").text(data.cards[0].value + " of " + data.cards[0].suit);
        $("#player2CardImg").html("<img src='" + data.cards[1].image + "'>");
        $("#player2Card").text(data.cards[1].value + " of " + data.cards[1].suit);
        $("#player1Score").text(player1Score);
        $("#player2Score").text(player2Score);
        $("#turns").text((data.remaining)/2);
     
    }

  };
});