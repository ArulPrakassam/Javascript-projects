//getting all span elements and converted them into arrays
const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value); //getting the value of data

  //incrementing randomly using this i.e for 1st span -1, for 2nd span - 1, for 3rd span -3

  //const increment = Math.ceil(value / 1000);

  const increment = 1; //incrementing using constant value for all span i.e - 1
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    //when initial value is greater than data value
    if (initialValue > value) {
      //then display that data value in the screen (i.e final value)
      el.textContent = `${value}+`;
      clearInterval(increaseCount); //stops the setInterval()
      return;
    }

    //displaying each value in the screen
    el.textContent = `${initialValue}+`;
  }, 1);
};

//each span passes to updateCount()
items.forEach((item) => {
  updateCount(item);
});
