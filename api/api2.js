const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = { crossDomain: true }

const onPokemonResponse = function (pokemon){
  console.log(`Hola, soy ${pokemon.name}`)
}

function obtenerPokemon(id){
  const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
  $.get(url, opts, onPokemonResponse)
}

for (var i = 0; i <=25; i++){
  obtenerPokemon(i)
}
