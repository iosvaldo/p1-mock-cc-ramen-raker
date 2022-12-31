// fetch API

fetch("http://localhost:3000/pokemons")
  .then((res) => res.json())
  // .then((data) => console.log(data)) // this console.log can be used in the beginning just to see that the data is passing through.
  .then((data) => {
    renderpokemon(data);
  });

//2. Writing out the variables to use in the funtion
let pokemonDisplay = document.getElementById("pokemon__display"); // "pokemon__display" from the id="pokemon__display" in the index.html file...go have a look!.
let pokemonImage = document.querySelector(".image__detail"); // "image__detail" from the class="image__detail" in the index.html file...go have a look!.
let pokemonName = document.querySelector(".name"); // "name" from the class="name" in the index.html file...go have a look!.
let pokemonHp = document.querySelector(".hp"); // "hp" from the class="hp" in the index.html file...go have a look!.
let pokemonRating = document.getElementById("rating__display"); // "rating__display" from the id="rating__display" in the index.html file...go have a look!.
let pokemonComment = document.getElementById("comment__display"); // "comment__display" from the id="comment__display" in the index.html file...go have a look!.

//NOTE: all the variable name i've created above are all referencing the form data on the front end. It's asking us to insert those pieces of data... Go have a look and see! its asking for the following...
//name
//hp
//image
//rating
//comment

//NOTE: Run json-server --watch db.json to see the data

//{
//  "id": 1,
// "name": " pokemon",
// "hp": 200,
// "image": "./assets/pokemon/image.jpg",
// "rating": 7,
//  "comment": "Can't go wrong with a classic!"
//},

//3. make a function, give it a name and iterate through the data

function renderpokemon(data) {
  for (const item of data) {
    // for each item in the object
    let image = document.createElement("img"); // creat a variable name with the purpose of creating an img element for our image.. make sense ? YOU GOT THIS !!!
    image.className = "pokemon__card";
    image.src = item.image;
    pokemonDisplay.append(image);
    //4. Now we need to manipulate the DOM by adding an EventListener with a click.
    image.addEventListener("click", function () {
      //Notice these variables names below? YES! we declared them above, now we'll use them to manipulate theose areas of our HTML Document 😅.
      pokemonImage.src = item.image;
      pokemonName.innerHTML = item.name;
      pokemonHp.innerHTML = item.hp;
      pokemonRating.innerHTML = item.rating;
      pokemonComment.innerHTML = item.comment;
    });
  }
}

//5. Now, we need to write out the form variables to
let newpokemon = document.getElementById("new__pokemon"); // "new__pokemon" from the id="pokemon__display" in the index.html file...go have a look!.
let newpokemonName = document.getElementById("new__name"); // "new__name" from the id="new__name" from the index.html file...go have a look!.
let newpokemonhp = document.getElementById("new__hp"); //"new__hp" from the id="new__hp" from.. you guessed it!
let newpokemonImage = document.getElementById("new__image"); // "new__image" from the id="new__image" from.. you guessed it!
let newpokemonRating = document.getElementById("new__rating"); // "new__rating" from the id="new__rating" from.. you guessed it!
let newpokemonComment = document.getElementById("new__comment"); // "new__comment" from the id="new__comment" from.. you guessed it!

//6. Finally we will create a function for our form
newpokemon.addEventListener("submit", function (e) {
  e.preventDefault();
  let newArray = [
    {
      name: newpokemonName.value,
      hp: newpokemonhp.value,
      image: newpokemonImage.value,
      rating: newpokemonRating.value,
      comment: newpokemonComment.value,
    },
  ];
  renderpokemon(newArray);
});

///END OF LINE 😅
