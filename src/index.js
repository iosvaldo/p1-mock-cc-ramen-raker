// fetch API

fetch("http://localhost:3000/ramens")
.then((res) => res.json())
// .then((data) => console.log(data)) // this console.log can be used in the beginning just to see that the data is passing through.
.then((data) => {
  renderRamen(data)
})
  

//2. Writing out the variables to use in the funtion
let ramenMenu = document.getElementById("ramen-menu") // "ramen-menu" from the id="ramen-menu" in the index.html file...go have a look!. 
let ramenImage = document.querySelector(".detail-image") // "detail-image" from the class="detail-image" in the index.html file...go have a look!. 
let ramenName = document.querySelector(".name") // "name" from the class="name" in the index.html file...go have a look!.
let ramenRestaurant = document.querySelector(".restaurant") // "restaurant" from the class="restaurant" in the index.html file...go have a look!.
let ramenRating = document.getElementById("rating-display") // "rating-display" from the id="rating-display" in the index.html file...go have a look!.
let ramenComment = document.getElementById("comment-display") // "comment-display" from the id="comment-display" in the index.html file...go have a look!.

//NOTE: all the variable name i've created above are all referencing the form data on the front end. It's asking us to insert those pieces of data... Go have a look and see! its asking for the following...  
//name 
//restaurant 
//image 
//rating 
//comment

//NOTE: Run json-server --watch db.json to see the data 

//{
  //  "id": 1,
   // "name": "Shoyu Ramen",
   // "restaurant": "Nonono",
   // "image": "./assets/ramen/shoyu.jpg",
   // "rating": 7,
  //  "comment": "Delish. Can't go wrong with a classic!"
  //},


//3. make a function, give it a name and iterate through the data

function renderRamen(data){
  for(const item of data){  // for each item in the object 
    let image = document.createElement("img") // creat a variable name with the purpose of creating an img element for our image.. make sense ? YOU GOT THIS !!!
    image.src = item.image
    ramenMenu.append(image)
    //4. Now we need to manipulate the DOM by adding an EventListener with a click.
    image.addEventListener("click", function(){
      //Notice these variables names below? YES! we declared them above, now we'll use them to manipulate theose areas of our HTML Document 😅. 
      ramenImage.src = item.image
      ramenName.innerHTML = item.name
      ramenRestaurant.innerHTML = item.restaurant
      ramenRating.innerHTML = item.rating
      ramenComment.innerHTML = item.comment
    });
  } 
  
}

//5. Now, we need to write out the form variables to
let newRamen = document.getElementById("new-ramen") // "new-ramen" from the id="ramen-menu" in the index.html file...go have a look!. 
let newRamenName = document.getElementById("new-name") // "new-name" from the id="new-name" from the index.html file...go have a look!.
let newRamenRestaurant = document.getElementById("new-restaurant") //"new-restaurant" from the id="new-restaurant" from.. you guessed it!
let newRamenImage = document.getElementById("new-image") // "new-image" from the id="new-image" from.. you guessed it!
let newRamenRating = document.getElementById("new-rating") // "new-rating" from the id="new-rating" from.. you guessed it!
let newRamenComment = document.getElementById("new-comment") // "new-comment" from the id="new-comment" from.. you guessed it!

//6. Finally we will create a function for our form
newRamen.addEventListener("submit", function(e){
  e.preventDefault();
  let newArray = [{
    "name": newRamenName.value,
    "restaurant": newRamenRestaurant.value,
    "image": newRamenImage.value,
    "rating": newRamenRating.value,
    "comment": newRamenComment.value,
  }]
  renderRamen(newArray)
})

///END OF LINE 😅
