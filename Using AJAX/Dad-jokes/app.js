const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", () => {
  fetchDadJoke();
});

//fetching the jokes
const fetchDadJoke = async () => {
  //before loading the jokes "Loading..." will appear in display
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      //headers are look like head and it has the User-Agent i.e our information
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    // console.log(response);  //it has "ok" which is false when url is wrong
    if (!response.ok) {
      throw new Error("There was an error"); //after this js goes to catch block
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error...";
    console.log(error.message);
  }
};
fetchDadJoke(); //this helps to display the joke when the screen loads in its first time
