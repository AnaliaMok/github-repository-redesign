$(document).ready(function(){
  $.getJSON('js/repos.json', function(repos){

    // Repo Cards to be displayed
    var cards = '';

    for(var i = 0, length = repos.length; i < length; i++){
      var curr = repos[i],
          description = (curr.description === null) ? '' : curr.description,
          language = (curr.language !== null) ? curr.language : null;

      var card = '<a href="' + curr.url + '" class="card" data-lang="' + language + '">'; // TODO: Adjust styling to make cards a tags; place url here
      card += '<p class="card-title">' + curr.title + '</p>';

      card += '<p class="card-content">' + description + '</p>';

      if(language != null){
        card += '<p><span class="language">' + language + '</span></p>';
      }

      card += '</a>'; // End tag

      cards += card;
    }

    $('.grid').html(cards);
  });
});
