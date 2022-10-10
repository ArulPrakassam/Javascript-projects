//dark theme

const toggleBtn = document.querySelector(".btn");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

//adding articles dynamically
const articlesContainer = document.querySelector(".articles");

//articles came from data.js
const articleData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;

    //formating date using moment.js

    const formatDate = moment(date).format("MMMM Do, YYYY");

    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>
          ${snippet}
        </p>
      </article>`;
  })
  .join("");
articlesContainer.innerHTML = articleData;
