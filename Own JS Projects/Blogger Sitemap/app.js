const url =
  "https://www.googleapis.com/blogger/v3/blogs/7365098446968680825/posts?key=AIzaSyBr-eYJoHgcNVA1obyLpnf98ikKEHhC89U";
const blog =
  "https://www.googleapis.com/blogger/v3/blogs/7365098446968680825?key=AIzaSyBr-eYJoHgcNVA1obyLpnf98ikKEHhC89U";

const container = document.querySelector(".container");

//finding the max number of posts
const maxResults = async () => {
  container.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(blog);
    const data = await response.json();
    return data.posts.totalItems;
  } catch (error) {
    container.innerHTML = `<div class="error">Error occurred.  Try Reloading the page</div>`;
    console.log(error);
  }
};

//fetching the posts
const fetchData = async (value) => {
  container.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(`${url}&maxResults=${value}`);
    const data = await response.json();
    const items = data.items;
    arrange(items);
  } catch (error) {
    container.innerHTML = `<div class="error">Error occurred.  Try Reloading the page</div>`;
    console.log(error);
  }
};

const arrange = (items) => {
  let value;
  const result = {};
  // format for our result is
  // result = {
  //   "Blog Tips": [
  //     { title: "1", url: "1" },
  //     { title: "2", url: "2" },
  //   ],
  //   Technology: [
  //     { title: "1", url: "1" },
  //   ],
  // };
  items.forEach((item) => {
    const { title, url, labels } = item;
    value = { title: `${title}`, url: `${url}` };

    //traversing the labels
    labels.forEach((label) => {
      if (label in result) {
        //if the label is added already then the previous value + the current value is added
        result[label] = [...result[label], value];
      } else {
        result[label] = [value];
      }
    });
  });

  displayContent(result);
};

const displayContent = (result) => {
  //converting the key,values of objects into array
  const newResult = Object.entries(result);
  newResult.sort();
  //inside the array there are many objects is there
  const finalResult = newResult
    .map((item) => {
      const [key, value] = item;

      //value has the title,url. value is an array traversing that to make an unordered list
      const list = value
        .map((list) => {
          const { title, url } = list;
          return `<li><a href="${url}" target="_blank">${title}</a></li>`;
        })
        .join("");
      return `<article class="single-item">
        <h1>${key}</h1>
        <ul>
         ${list}
        </ul>
      </article>`;
    })
    .join("");
  container.innerHTML = finalResult;
};

//starting position
const start = async () => {
  const value = await maxResults();
  await fetchData(value);
};
start();

//for year

const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
