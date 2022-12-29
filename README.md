# Pokemon Rating App.

## Learning Goals

- Access information from an API using a GET request and use it to update the
  DOM
- Listen for user events and update the DOM in response

## Introduction

Today you'll be building an app for rating pokemon. You will be using a local API
and building out the frontend for our app.

## Stock Demo

Use this gif as an example of how the app should work.

![demo]

## Setup

- Run `json-server --watch db.json` to get the backend started
- Open the `index.html` file on your browser
- Write your code in the `index.js` file

## Endpoints

Your base URL for your API will be: `http://localhost:3000`

The endpoints you may need are:

- GET `/pokemons`
- GET `/pokemons/:id`

Feel free to add any additional classes or ids to any elements in the HTML file
as you see fit.

## Core Deliverables

As a user, I can:

- See all pokemon images in the `div` with the id of `pokemon__menu`. When the page
  loads, request the data from the server to get all the pokemon objects. Then,
  display the image for each of the pokemon using an `img` tag inside the
  `#pokemon__menu` div.
- Click on an image from the `#pokemon__menu` div and see all the info about that
  pokemon displayed inside the `#pokemon__detail` div and where it says
  `insert comment here` and `insert rating here`.
- Create a new pokemon after submitting the `new__pokemon` form. The new pokemon should
  be added to the`#pokemon__menu` div. The new pokemon does not need to persist; in
  other words, if you refresh the page, it's okay that the new pokemon is no
  longer on the page.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user, I can:

- See the details for the first pokemon as soon as the page loads (without
  clicking on an image)
- Update the rating and comment for a pokemon by submitting a form. Changes should
  be reflected on the frontend. No need to persist. You can add this HTML to the
  `index.html` file to create the edit form:

```html
<form id="edit-pokemon">
  <h4>Update the Featured pokemon</h4>
  <label for="rating">Rating: </label>
  <input type="number" name="rating" id="new__rating" />
  <label for="new__comment">Comment: </label>
  <textarea name="new__comment" id="new__comment"></textarea>
  <input type="submit" value="Update" />
</form>
```

- Delete a pokemon (you can add a "delete" button if you'd like, or use an
  existing element to handle the delete action). The pokemon should be removed
  from the `pokemon__menu` div, and should not be displayed in the `pokemon__detail`
  div. No need to persist.

## Extra Advanced Deliverables

You'll need a these endpoints for these advanced deliverables:

- POST `/pokemons`
- DELETE `/pokemons/:id`
- PATCH `/pokemons/:id`

As a user, I can:

- persist my updates to a pokemon's rating and comment. (PATCH request)
- persist new pokemons that I create (POST request)
- persist any pokemon deletions (DELETE request)
