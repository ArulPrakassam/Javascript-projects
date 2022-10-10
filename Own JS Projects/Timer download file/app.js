const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
let count = 5; //seconds
const para = document.createElement("p");
para.innerText = `Wait for ${count} seconds`;
main.appendChild(para);
const timer = setInterval(() => {
  count--;
  if (count >= 0) {
    para.innerText = `Wait for ${count} seconds`;
  } else {
    //if count is less than 0 then display() will execute
    clearInterval(timer);
    display();
  }
}, 1000);

const display = () => {
  para.style.display = "none";
  const url = "./link/link.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      main.innerHTML = `<a href="${data[0].link}"class="link"
        ><button class="btn">Download now</button></a
      >`;
    });
};
