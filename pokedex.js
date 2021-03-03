// DOCUMENTATION :
//https://www.youtube.com/watch?v=XL68br6JyYs&t=845s
//https://www.youtube.com/watch?v=4Qyo6veprVY&t=1166s
//GIF PIKACHU : https://www.planete-smiley.com/emoticones/Pokemon/57-3.php
//Modal : https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e

const poke_container = document.getElementById('poke_container');

//Permet de récupérer les 151 du fichiers
const fetchPokemons = async () => {
  for(let i=1; i<=151; i++){
    await getPokemon(i);
  }
}
////////////////////////////////////////

const colors = {
	fire: '#d80100',
	grass: '#7ccb63',
	electric: '#f7ee00',
	water: '#5da2f7',
	ground: '#89370b',
	rock: '#3c1c0a',
	fairy: '#e9aaa4',
	poison: '#ab80b7',
	bug: '#037195',
	dragon: '#f2aa0f',
	psychic: '#8800f7',
	flying: '#838582',
	fighting: '#838582',
	normal: '#a2abb3'
};
const main_types = Object.keys(colors);

///////////////////////////////////////

/*URL API*/
const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

//Appel les ID via la boucle for
fetchPokemons();

//Crée les cartes
function createPokemonCard(pokemon){
const pokemonEl = document.createElement('div');
pokemonEl.classList.add('pokemon');

//Appel le type du pokemon
const poke_types = pokemon.types.map(el => el.type.name);
// color type
const type = main_types.find(type => poke_types.indexOf(type) > -1);
const color = colors[type];
pokemonEl.style.backgroundColor = color;
//Permet de mettre une Maj
const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

const pokeInnerHTML = 
  `
            <div class="infos">
              <span class="infos__number"># ${pokemon.id}</span> 
              <span class="infos__title">${name}</span> 
            </div>

            <div class="spriteOrigine">
              <img class="spriteOrigine__picture" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}"/>
            </div>

            <p class="infos__types">${poke_types}</p> 

            <div class="spriteGame">  
              <img class="spriteGame__Face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}"/>
              <img class="spriteGame__Back"  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png" alt="${name}"/>
            </div>
    
  `;

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);   

}