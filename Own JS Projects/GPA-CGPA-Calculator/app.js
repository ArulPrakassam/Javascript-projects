const addMoreBtn = document.querySelector(".add-more-btn");
const removeBtn = document.querySelector(".remove-btn");
const tableBodyOne = document.querySelector(".table-body-one");
const clearBtn = document.querySelector(".clear-btn");

//adding more rows
addMoreBtn.addEventListener("click", function () {
  const html = `<tr class="main-area">
      <td class="input-text">
        <input type="text" class="subjects" placeholder="(optional)" />
      </td>
      <td class="input-credit">
        <input
          type="text"
          placeholder="credit hour"
          class="credit-data"
          maxlength="1"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
        />
      </td>
      <td class="select-grade">
        <select name="grade" id="grade">
          <option value="-">-</option>
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </td>
    </tr>
    <tr class="main-area">
              <td class="input-text">
                <input type="text" class="subjects" placeholder="(optional)" />
              </td>
              <td class="input-credit">
                <input
                  type="text"
                  placeholder="credit hour"
                  class="credit-data"
                  maxlength="1"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                />
              </td>
              <td class="select-grade">
                <select name="grade" id="grade">
                  <option value="-">-</option>
                  <option value="S">S</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
              </td>
            </tr>
            <tr class="main-area">
              <td class="input-text">
                <input type="text" class="subjects" placeholder="(optional)" />
              </td>
              <td class="input-credit">
                <input
                  type="text"
                  placeholder="credit hour"
                  class="credit-data"
                  maxlength="1"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                />
              </td>
              <td class="select-grade">
                <select name="grade" id="grade">
                  <option value="-">-</option>
                  <option value="S">S</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
              </td>
            </tr>
    `;
  //   tableBodyTwo.innerHTML += html;
  tableBodyOne.insertAdjacentHTML("beforeend", html);
  sessionShowing(tableBodyOne.innerHTML);
  sessionSaving();
});

removeBtn.addEventListener("click", () => {
  if (tableBodyOne.lastElementChild) {
    tableBodyOne.removeChild(tableBodyOne.lastElementChild);
    let removeIndex =
      Array.prototype.indexOf.call(
        tableBodyOne.children,
        tableBodyOne.lastElementChild
      ) + 1;
    localStorage.removeItem(`input ${removeIndex}`);
    localStorage.removeItem(`grade ${removeIndex}`);
    localStorage.removeItem(`subject ${removeIndex}`);
    sessionShowing(tableBodyOne.innerHTML);
  }
});

//saving to localStorage
function sessionSaving() {
  document.querySelectorAll(".credit-data").forEach((input, index) => {
    input.addEventListener("input", () => {
      localStorage.setItem(`input ${index}`, input.value);
    });
  });

  document.querySelectorAll("#grade").forEach((grade, index) => {
    grade.addEventListener("input", () => {
      localStorage.setItem(`grade ${index}`, grade.value);
    });
  });

  document.querySelectorAll(".subjects").forEach((subject, index) => {
    subject.addEventListener("input", () => {
      localStorage.setItem(`subject ${index}`, subject.value);
    });
  });
}

// showing the localStorage data in display screen
function sessionShowing(preHTML) {
  if (preHTML != undefined) {
    localStorage.setItem(`preHTML`, preHTML);
  }
  window.addEventListener("load", () => {
    let previousHTML = localStorage.getItem(`preHTML`);
    if (previousHTML != undefined) {
      tableBodyOne.innerHTML = previousHTML;
    }
    document.querySelectorAll(".credit-data").forEach((input, index) => {
      if (localStorage.getItem(`input ${index}`)) {
        input.value = localStorage.getItem(`input ${index}`);
      }
    });

    document.querySelectorAll("#grade").forEach((grade, index) => {
      if (localStorage.getItem(`grade ${index}`)) {
        grade.value = localStorage.getItem(`grade ${index}`);
      }
    });
    document.querySelectorAll(".subjects").forEach((subject, index) => {
      if (localStorage.getItem(`subject ${index}`)) {
        subject.value = localStorage.getItem(`subject ${index}`);
      }
    });
    sessionSaving();
  });
}

sessionShowing();

//calculation
const submit = document.querySelector(".submit-btn");
const gradePoints = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

submit.addEventListener("click", function () {
  const creditHour = document.querySelectorAll(".credit-data");
  const grades = document.querySelectorAll("#grade");
  let credits = [];
  var sum;
  let gradeValues = [];
  let multipliedValue = [];
  let sumCredits = 0;
  //finding the total of credit hours

  creditHour.forEach(function (credit) {
    if (credit.value) {
      //suming the values of credit hours
      sumCredits += parseInt(credit.value);

      //adding the values of credit hours into an array
      credits.push(parseInt(credit.value));
    }
  });

  //adding the values of grade points into an array
  grades.forEach(function (grade) {
    if (grade.value !== "-") {
      const gradeValue = grade.value;
      gradeValues.push(gradePoints[gradeValue]);
    }
  });

  if (credits.length !== gradeValues.length) {
    alert("Check that you have entered the values correctly");
  } else {
    //multiplication of credit hours and grade points
    for (let i = 0; i < credits.length; i++) {
      multipliedValue[i] = credits[i] * gradeValues[i];
    }

    //finding the sum of the multiplied values
    sum = multipliedValue.reduce(function (a, c) {
      return a + c;
    }, 0);

    //displaying the value in the output screen
    if (!isNaN(sum) && !isNaN(sumCredits) && sumCredits !== 0) {
      document.querySelector(".answer-value").classList.remove("hidden");
      document.querySelector(".answer-value").classList.toggle("show");
      const answerValue = document.querySelector(".answer-value-content");
      const answerValuePercent = document.querySelector(
        ".answer-value-percent"
      );
      answerValue.innerText += (sum / sumCredits).toFixed(2);
      answerValuePercent.innerText =
        ((answerValue.textContent - 0.5) * 10).toFixed(2) + "%";
    }
    //if the user press submit with no values in all places means this will show alert
    else {
      alert("Check that you have entered the values correctly");
    }
  }
});

//to clear all data in the inputs and also from the localStorage
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  document.querySelectorAll(".credit-data").forEach((input) => {
    input.value = "";
  });

  document.querySelectorAll("#grade").forEach((grade) => {
    grade.value = "-";
  });

  document.querySelectorAll(".subjects").forEach((subject) => {
    subject.value = "";
  });
});

//for year
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
