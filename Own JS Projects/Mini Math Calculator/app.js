const input = document.querySelector(".input");
const buttons = [...document.querySelectorAll("button")];
var flag = 0; //used for decimal points
var same = 0; //used for a situation [after displaying evaluated answer.  And pressing a number will show the pressed number in display]
var op = 0; //used for a situation [when i press a number and then press a operator and again I pressed a operator then the previous operator will change to the current pressed operator]
class Calculate {
  backspace(temp) {
    temp.pop();
    temp = temp.join("");
    this.displayAnswer(temp);
  }
  displayAnswer(value) {
    input.value = value;
  }
  evaluate(value) {
    try {
      if (!isNaN(eval(value))) {
        this.displayAnswer(eval(value));
      }
    } catch (error) {
      console.log(error.message);
      alert("Invalid input format");
    }
  }
  displayValue(value) {
    input.value = input.value + value;
  }
  sameValue(value) {
    input.value = value;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let button = btn.value;
    const calc = new Calculate();
    if (button === "backspace" && input.value !== "") {
      //for backspace
      calc.backspace([...input.value]);
    }
    if (button === "C") {
      //for clear
      flag = 0;
      calc.displayAnswer("");
    }
    if (button === "=") {
      //replacing all x into *
      //for answer
      flag = 0;
      same = 1;
      calc.evaluate(input.value.replaceAll("x", "*"));
    }
    if (!isNaN(button)) {
      //for numbers
      if (same === 1) {
        same = 0;
        op = 0;
        calc.sameValue(button);
      } else {
        op = 0;
        calc.displayValue(button);
      }
    }

    if (button === "." && flag === 0) {
      if (same === 1) {
        same = 0;
        flag = 1;

        calc.sameValue(button);
      } else {
        flag = 1;
        same = 0;

        calc.displayValue(button);
      }
    }

    if (
      isNaN(button) &&
      button !== "C" &&
      button !== "backspace" &&
      button !== "=" &&
      button !== "." &&
      button !== "(" &&
      button !== ")" &&
      button !== "+/-"
    ) {
      //for operators
      if (input.value !== "") {
        flag = 0;
        same = 0;

        if (op === 0) {
          op = 1;
          calc.displayValue(button);
        } else {
          let temp = [...input.value];
          temp[temp.length - 1] = button;
          temp = temp.join("");
          input.value = temp;
        }
      }
    }
    if (button === "(") {
      //for bracket
      calc.displayValue("(");
    }
    if (button === ")") {
      //for bracket
      calc.displayValue(")");
    }
    if (button === "+/-") {
      //for (-
      let temp = [...input.value];

      if (
        temp.every(
          (item) => item !== "+" && item !== "-" && item !== "x" && item !== "÷"
        )
      ) {
        temp = temp.join("");
        temp = `(-${temp}`;
        input.value = temp;
      } else if (!isNaN(temp[temp.length - 1])) {
        let v = `(-${temp[temp.length - 1]}`;
        temp[temp.length - 1] = v;
        temp = temp.join("");
        input.value = temp;
      } else {
        let temp = [...input.value];
        let reverse = temp.reverse();

        for (let i = 0; i < temp.length; i++) {
          if (isNaN(reverse[i])) {
            let v = `${reverse[i]}(-`;
            reverse[i] = v;
            input.value = reverse.reverse().join("");
            break;
          }
        }
      }
    }
  });
});

//for year

const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
