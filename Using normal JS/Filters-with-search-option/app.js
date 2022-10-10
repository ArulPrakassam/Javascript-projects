const productContainer = document.querySelector(".products-container");
let filteredProducts = [...products];

//displaying the products
const displayProducts = () => {
  //displaying this text when the search is not matched with products
  if (filteredProducts.length < 1) {
    productContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  //used to display the products
  productContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            alt=""
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`;
    })
    .join("");
};

displayProducts();

//text filter

const searchInput = document.querySelector(".search-input");

//search input
searchInput.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase()); //returns the array if the condition is true
  });
  displayProducts();
});

//filter buttons

const companies = document.querySelector(".companies");

const displayButtons = () => {
  //creating unique buttons by using set()
  const buttons = [
    "all",
    ...new Set(
      products.map((product) => {
        return product.company;
      })
    ),
  ];

  //adding the buttons to the HTML
  companies.innerHTML = buttons
    .map((company) => {
      return ` <button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();

//displaying the products when the button is clicked
companies.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    displayProducts();

    searchInput.value = ""; //clear the search text when button is clicked
  }
});
