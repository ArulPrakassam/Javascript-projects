import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
const displayDrink = async ({ drinks }) => {
  hideLoading();
  const {
    strDrinkThumb: img,
    strDrink: name,
    strInstructions: desc,
  } = drinks[0];
  const list = [
    drinks[0].strIngredient1,
    drinks[0].strIngredient2,
    drinks[0].strIngredient3,
    drinks[0].strIngredient4,
  ];

  const image = getElement(".drink-img");
  const drinkName = getElement(".drink-name");
  const description = getElement(".drink-desc");
  const ingredients = getElement(".drink-ingredients");
  image.src = img;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (item) {
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
      }
      return;
    })
    .join("");
};
export default displayDrink;
