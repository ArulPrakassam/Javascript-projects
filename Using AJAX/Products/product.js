const url = "https://course-api.com/javascript-store-single-product";

const productMain = document.querySelector(".product");

const fetchProduct = async () => {
  productMain.innerHTML = '<div class="loading"></div>';
  try {
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    product.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProduct = (product) => {
  const { company, colors, description, name, price, image } = product.fields;
  const { url: img } = image[0];

  const colorList = colors.map((color) => {
    return `<span class="product-color" style="background-color: ${color}"></span>`;
  });
  document.title = name.toUpperCase();

  productMain.innerHTML = `<div class="product-wrapper">
        <img src="${img}" alt="${name}" class="img" />
        <div class="product-info">
          <h3>${name}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
           ${colorList}
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
