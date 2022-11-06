const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=21&format=json&origin=*&srsearch=";

const page_url = "http://en.wikipedia.org/?curid=";
const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const results = document.querySelector(".results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    results.innerHTML = `<div class='error'>Please enter valid search term </div>`;
    return;
  }
  fetchPages(value);
});

const fetchPages = async (inputValue) => {
  results.innerHTML = `<div class='loading'></div>`;

  try {
    const response = await fetch(`${url}${inputValue}`);
    const data = await response.json();
    const result = data.query.search;
    if (result.length != 0) {
      displayResult(result);
    } else {
      results.innerHTML = `<div class='error'>No Matching Results. Please Try Again</div>`;
    }
  } catch (error) {
    results.innerHTML = `<div class='error'>There was an error...</div>`;
  }
};

const displayResult = (result) => {
  const resultsInfo = result
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `
        
          <a href="${page_url}${pageid}" target="_blank">
            <h4>${title}</h4>
            <p>
             ${snippet}
            </p>
          </a>
          `;
    })
    .join("");
  results.innerHTML = `<div class="articles">${resultsInfo}</div>`;
};
