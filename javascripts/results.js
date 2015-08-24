define(function(require) {


  return {
    results: function(data){
      var winner;
      var player1Card = data.cards[0].value;
      var player2Card = data.cards[1].value;


      if (player1Card === "ACE") {
        player1Card = 14;
      } else if (player1Card === "KING") {
        player1Card = 13;
      } else if (player1Card === "QUEEN") {
        player1Card = 12;
      } else if (player1Card === "JACK") {
        player1Card = 11;
      } else if (player1Card === 0) {
        player1Card = 10;
      }

      player1Card = Number(player1Card);


      if (player2Card === "ACE") {
        player2Card = 14;
      } else if (player2Card === "KING") {
        player2Card = 13;
      } else if (player2Card === "QUEEN") {
        player2Card = 12;
      } else if (player2Card === "JACK") {
        player2Card = 11;
      } else if (player2Card === 0) {
        player2Card = 10;
      }

      player2Card = Number(player2Card);

      console.log("player1Card", typeof player1Card);
      console.log("player2Card", typeof player2Card);

      if (player1Card > player2Card) {
        $("#result").text("Player 1 wins this turn!");
        winner = 1;
      } else if (player1Card < player2Card) {
        $("#result").text("Player 2 wins this turn!");
        winner = 2;
      } else if (player1Card == player2Card) {
        $("#result").text("Same card!");
        winner = 3;
      }


      return winner;
    }

  };
});