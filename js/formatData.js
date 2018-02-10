$(document).ready(function(){
  $.getJSON('js/repos.json', function(repos){

    // Repo Cards to be displayed
    var cards = '';

    for(var i = 0, length = repos.length; i < length; i++){
      var curr = repos[i];

      var card = '<div class="card">'; // TODO: Adjust styling to make cards a tags; place url here
      card += '<h2>' + curr.title + '</h2>';
      card += '<div class="card-content">' + curr.description + '</div>';
      if(curr.language != null){
        card += '<div><span class="language">' + curr.language + '</span></div>';
      }

      card += '</div>';

      cards += card;
    }

    $('.grid').html(cards);
  });
});
