$(document).ready(function(){
  $.getJSON('js/repos.json', function(repos){

    // Repo Cards to be displayed
    var cards = '';

    for(var i = 0, length = repos.length; i < length; i++){
      var curr = repos[i];

      var card = '<div class="card">'; // TODO: Adjust styling to make cards a tags; place url here
      card += '<h2><a href="' + curr.url + '">' + curr.title + '</a></h2>';

      var description = (curr.description === null) ? '':curr.description;
      card += '<div class="card-content"><a href="' + curr.url + '">' + description + '</a></div>';

      if(curr.language != null){
        card += '<div><span class="language">' + curr.language + '</span></div>';
      }

      card += '</div>';

      cards += card;
    }

    $('.grid').html(cards);
  });
});
