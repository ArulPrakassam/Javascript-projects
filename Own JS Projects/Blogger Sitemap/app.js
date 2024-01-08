const apiKey = "AIzaSyBr-eYJoHgcNVA1obyLpnf98ikKEHhC89U";
const posts = `https://www.googleapis.com/blogger/v3/blogs/7365098446968680825/posts?key=${apiKey}`;
const blog = `https://www.googleapis.com/blogger/v3/blogs/7365098446968680825?key=${apiKey}`;

const container = document.querySelector(".container");

const fetchData = async (url) => {
  container.innerHTML = `<div class="loading-buffer"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    //for max posts count
    if (data.posts) {
      return data.posts.totalItems;
    }
    displayLists(data.items);
  } catch (error) {
    container.innerHTML = `<div class="error">Error occurred.  Try Reloading the page</div>`;
    console.log(error);
  }
};

const displayLists = (posts) => {
  let results = {};
  posts.forEach((item) => {
    const { title, url, labels } = item;
    labels.forEach((label) => {
      if (label in results) {
        results[label] = [...results[label], { title, url }];
      } else {
        results[label] = [{ title, url }];
      }
    });
  });
  //sorted
  const sorted = Object.fromEntries(Object.entries(results).sort());
  for (const label in sorted) {
    const list = results[label]
      .map((item) => {
        return `<li><a href="${item.url.replace(
          "http",
          "https"
        )}" target="_blank">${item.title}</a></li>`;
      })
      .join("");

    const html = `<article class="single-item">
        <h1>${label}</h1>
        <ul>
         ${list}
        </ul>
      </article>
      `;
    document.querySelector(".loading-buffer").style.display = "none";
    container.insertAdjacentHTML("beforeend", html);
  }
};

const start = async () => {
  const maxResults = await fetchData(blog);
  await fetchData(`${posts}&fetchBodies=false&maxResults=${maxResults}`);
};
start();

//for year

document.querySelector(".year").innerHTML = new Date().getFullYear();
