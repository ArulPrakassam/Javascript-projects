import getElement from "./getElement.js";

import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getElement(".search-form");
const input = getElement('[name="drink"]');

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (input.value) {
    presentDrinks(`${baseURL}${input.value}`);
  } else {
    return;
  }
});
