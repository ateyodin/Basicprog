const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = { crossDomain: true }


function obtenerPokemon(id, callback){
  const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
  $.get(url, opts, function (pokemon){
    console.log(`Hola, soy ${pokemon.name}`)

    if (callback){
      callback()
    }
  })
}

  obtenerPokemon(1, function(){
    obtenerPokemon(2, function(){
      obtenerPokemon(3, function(){
        obtenerPokemon(4, function(){
          obtenerPokemon(5, function(){
            obtenerPokemon(6, function(){
              obtenerPokemon(7, function(){
                obtenerPokemon(8, function(){
                  obtenerPokemon(9, function(){
                    obtenerPokemon(10)
                  })
                })
              })
            })
          })
        })
      })
    })
  })
