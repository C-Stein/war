define(function(require) {
  var Q = require("q");

  return {
    newGame: function(){
      var deferred = Q.defer();
      console.log("newGame called");

      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2",
       
      }).done(function(data){
          console.log("new deck", data);
          deferred.resolve(data);
     
      });

      return deferred.promise;




      
        
    }
  };
});