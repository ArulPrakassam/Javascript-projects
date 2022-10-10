const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  //if class is there then it removes it, if class is not there then it adds it
  links.classList.toggle("show-links");
});
