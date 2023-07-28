import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

//looking for drinks starts with "p"
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=p";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(url);
});
