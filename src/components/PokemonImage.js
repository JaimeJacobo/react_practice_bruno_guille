export function PokemonImage(){
  // JavaScript

  const pokemonList = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  ]

  const renderRandomPokemon = ()=>{
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const selectedPokemon = pokemonList[randomIndex]
    return selectedPokemon
  }

  return(
    // JSX
    <div className="Card">
     <img src = {renderRandomPokemon()} alt="Pokemon"/>
    </div>
  )
}