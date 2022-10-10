// date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

//navlinks
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

  //links container height is 0 because we put height=0 in css.  But inside links container, a class of links is there.  Its height would not be zero.  So using that height and giving that height to the links container
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//fixed navbar

const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  //for fixed navbar
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  //for back to top button
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    //navigate to specific session

    // slice extracts a section of a string without modifying original string
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    //offsetTop - A Number, representing the top position of the element, in pixels

    //calculate the height
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 94) {
      //this is for mini screen
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    //closing the navbar in mini screen
    linksContainer.style.height = 0;
  });
});
