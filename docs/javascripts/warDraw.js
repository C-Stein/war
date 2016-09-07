define(function(require) {
var Q = require("q");

  return {
    play: function(deckID){
      var deferred = Q.defer();

      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=8",
       
      }).done(function(data){
          console.log("played", data);
          deferred.resolve(data);
     
      });

      return deferred.promise;
    }

  };
});