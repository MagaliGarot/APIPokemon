let cardImgOne = document.querySelector(".card-img-One");
let cardImgTwo = document.querySelector(".card-img-Two");
let cardPicture = document.querySelector(".card-picture");
let name = document.querySelector(".card-name");
let type = document.querySelector(".card-type");
let generateBtn = document.querySelector(".submit-button");

generateBtn.addEventListener("click", e => {
    e.preventDefault();

    let id = document.querySelector(".search-input").value;

    if (isNaN(id)) {
        name.innerText = "This is not an ID";
        return;
    }
    else{
    async function getTwoPokemon() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        console.log(data);

        let imgOne = data.sprites.front_default;
        let imgTwo = data.sprites.back_default;
        let picture = data.sprites.other.dream_world.front_default;
        let newName = data.name;
        let newTypes = data.types[0].type.name;

        newName = newName.charAt(0).toUpperCase() + newName.slice(1);
        name.innerText = newName;

        newTypes = newTypes.charAt(0).toUpperCase() + newTypes.slice(1);
        type.innerText = newTypes;
     
        cardImgOne.innerHTML = `<img src=${imgOne} alt="Pokemon Face">`;
        cardImgTwo.innerHTML = `<img src=${imgTwo} alt="Pokemon Back">`;
        cardPicture.innerHTML = `<img src=${picture} alt="Image not available">`;
    }
    getTwoPokemon();
}
});
