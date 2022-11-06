const url = "https://course-api.com/javascript-store-products";

const productsCenter = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsCenter.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data; //this will return a promise
  } catch (error) {
    productsCenter.innerHTML = '<p class="error">there was an error</p>';
  }
};

//used for rendering
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name, price } = product.fields;
      const { url: img } = product.fields.image[0];
      return `<a href="product.html?id=${id}" class="single-product">
            <img src="${img}" alt="${name}" class="single-product-img img" />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${price / 100}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsCenter.innerHTML = ` <div class="products-container">${productList}</div>`;
};

const start = async () => {
  //when using async the return promise from fetchProducts is look like normal array
  const data = await fetchProducts();
  displayProducts(data);
};

start();
