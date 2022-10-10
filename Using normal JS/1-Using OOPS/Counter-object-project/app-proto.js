//checking that the element is available or not
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }

  //throwing error if it is not available
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//creating constructor
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.valueDom = element.querySelector(".value");

  //adding the text (i.e value) to the counter value
  this.valueDom.textContent = this.value;

  //bind this to all function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  //eventlistener
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

// prototype for constructor
Counter.prototype.increase = function () {
  this.value++;
  this.valueDom.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

//two instances i.e two counters
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
