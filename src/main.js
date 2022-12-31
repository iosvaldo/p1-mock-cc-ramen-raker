
// fetch the data from the json server
fetch("http://localhost:3000/pokemons")
.then((res) => res.json())
.then((data)=> renderpokemonCards(data))


//create nessesary variable to then create a function that renders the pokemon cards
//displaying our pokemon 
//cards, image, name, hp, rating, and comment

let pokeCardDisplay = document.getElementById('pokemon__display');
let pokemonImage = document.querySelector('.image__detail');
let pokemonName = document.querySelector('.name');
let pokemonHP = document.querySelector('.hp');
let pokemonRating = document.getElementById('rating__display');
let pokemonComment = document.getElementById('comment__display');

console.log(pokeCardDisplay);
console.log(pokemonImage);
console.log(pokemonName);
console.log(pokemonHP);
console.log(pokemonRating);
console.log(pokemonComment);

//build a function that iteates through our array of 5 pokemon card data.

function renderpokemonCards(data) {
  for (const item of data) {
    let image = document.createElement("img");
    image.className = "pokemon__card";
    image.src = item.image
    // the append will start showing changes
    // dont forget to pass the function name to fetch
    pokeCardDisplay.append(image);
//create a click event handler function that will showcase the card in the main section
    image.addEventListener("click", function () {
      pokemonImage.src = item.image;
      pokemonName.innerHTML = item.name;
      pokemonHP.innerHTML = item.hp;
      pokemonRating.innerHTML = item.rating;
      pokemonComment.innerHTML = item.comment;
    })
  }
}

//create nessesary variable to then create a function that displays a new pokemon card onto the display of cards

let newPokemonForm = document.getElementById('new__pokemon');
//name,hp,image,rating,comment
let newPokemonName = document.getElementById('new__name');
let newPokemonHP = document.getElementById('new__hp');
let newPokemonImage = document.getElementById('new__image');
let newPokemonRating = document.getElementById('new__rating');
let newPokemonComment = document.getElementById('new__comment');

console.log(newPokemonComment);
console.log(newPokemonForm);
console.log(newPokemonHP);
console.log(newPokemonName);
console.log(newPokemonRating);
console.log(newPokemonImage);

// create an event handler function when a user click to submit the form and adds new pokemon.
newPokemonForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let pokemonArray = [
    {
      name: newPokemonName.value,
      hp:     newPokemonHP.value,
      image: newPokemonImage.value,
      rating: newPokemonRating.value,
      comment: newPokemonComment.value,
    },
  ];
  renderpokemonCards(pokemonArray);
})