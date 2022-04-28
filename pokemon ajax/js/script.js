$(function () {
  var pokemonApi = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokemonApi)
    .done(function (data) {
     // console.log(data);

      $.each(data.pokemon_species, function (index, pokemon) {
        var name = capitalizes(pokemon.name);

        var BoldName = $("<strong>").text(name);

        var link = $("<a>").attr("id",pokemon.name).attr("href","#").append(BoldName);
        console.log(link);

        var paragraph = $("<p>").html(
          "Pokemon Species No." + (index + 1) + " is ").append(link);
        paragraph.appendTo("#pokemon");

        link.click(function(){
          showPokemon(pokemon.name);
        });
      });
    })
    .fail(function () {
      console.log("Call To Api Failed");
    })
    .always(function () {
      console.log("*** Greet API ***");
    });

    var detailsDiv = $("#pokemon-details");

    function showPokemon(name) {

      $.getJSON(pokemonByName + name).done(function(details) {
      
        var image = $("<img>").attr("src", details.sprites.front_default);
        detailsDiv.empty()
            .append("<h2>" + capitalizes(name) + "</h2>")
            .append(image);
  
      }).fail(function(error) {
        console.log("Could not retrieve details for " + name);
      });
    }


});

function capitalizes(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
