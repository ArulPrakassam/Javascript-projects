import getElement from "./modules/getElement.js";
import getUser from "./modules/getUser.js";
import displayUser from "./modules/displayUser.js";

const btn = getElement(".btn");

const showUser = async () => {
  //without async you need to use this.  Because async getUser will return a promise
  //   getUser().then((data) => console.log(data));
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
