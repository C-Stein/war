define(function(require) {
    var $ = require("jquery");
    var _ = require("lodash");
    var newGame = require("newGame");

    var deckID;
    


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
      

    

    });









});