const userDate = document.getElementById("user-date");
const userMonth = document.getElementById("user-month");
const userYear = document.getElementById("user-year");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const button = document.querySelector(".button");
const result = document.querySelector(".result");

//displaying current date
userDate.value = new Date().getDate();
date.value = new Date().getDate();

//this will give the month in short form in words
userMonth.value = new Date().toLocaleString("default", {
  month: "short",
});
month.value = new Date().toLocaleString("default", {
  month: "short",
});
userYear.value = new Date().getFullYear();
year.value = new Date().getFullYear();

//adding options of dates for default month

//this will give the total number of days in a month
let m = new Date(userYear.value, new Date().getMonth() + 1, 0).getDate();
for (let i = 1; i <= m; i++) {
  userDate.add(new Option(`${i}`, i));
  date.add(new Option(`${i}`, i));
}

userDate.value = new Date().getDate();
date.value = new Date().getDate();

userMonth.addEventListener("change", (e) => {
  //previously selected value
  let value = userDate.value;

  //this will give the month number
  let selectedMonth =
    new Date(`${e.currentTarget.value} 1 2022`).getMonth() + 1;

  //this will give the total number of days in a month
  let z = new Date(userYear.value, selectedMonth, 0).getDate();

  //creating an array with total dates in that array
  let a = new Array();
  for (let i = 1; i <= z; i++) {
    a.push(i);
  }

  //removing the dates of previously selected one
  userDate.querySelectorAll("option").forEach((item) => {
    item.remove();
  });

  //this will give the total number of days in a month
  let m = new Date(userYear.value, selectedMonth, 0).getDate();

  //used to add new options i.e dates of the selected month
  for (let i = 1; i <= m; i++) {
    userDate.add(new Option(`${i}`, i));
  }

  //use the previously selected date when changing the month if date not available in the changed month means then last date of the month is selected
  if (a.includes(parseInt(value))) {
    userDate.getElementsByTagName("option")[value - 1].selected = "selected";
  } else {
    userDate.getElementsByTagName("option")[a.length - 1].selected = "selected";
  }
});
userYear.addEventListener("change", (e) => {
  if (userMonth.value == "Feb") {
    if (
      (e.currentTarget.value % 4 == 0 && e.currentTarget.value % 100 != 0) ||
      e.currentTarget.value % 400 == 0
    ) {
      userDate.add(new Option(`29`, "29"));
    } else {
      userDate.lastChild.remove();
    }
  }
});

month.addEventListener("change", (e) => {
  //previously selected value
  let value = userDate.value;

  //this will give the month number
  let selectedMonth =
    new Date(`${e.currentTarget.value} 1 2022`).getMonth() + 1;

  //this will give the total number of days in a month
  let z = new Date(userYear.value, selectedMonth, 0).getDate();

  //creating an array with total dates in that array
  let a = new Array();
  for (let i = 1; i <= z; i++) {
    a.push(i);
  }

  //removing the dates of previously selected one
  date.querySelectorAll("option").forEach((item) => {
    item.remove();
  });

  //this will give the total number of days in a month
  let m = new Date(year.value, selectedMonth, 0).getDate();

  //used to add new options i.e dates of the selected month
  for (let i = 1; i <= m; i++) {
    date.add(new Option(`${i}`, i));
  }

  //use the previously selected date when changing the month if date not available in the changed month means then last date of the month is selected
  if (a.includes(parseInt(value))) {
    date.getElementsByTagName("option")[value - 1].selected = "selected";
  } else {
    date.getElementsByTagName("option")[a.length - 1].selected = "selected";
  }
});

year.addEventListener("change", (e) => {
  if (month.value == "Feb") {
    if (
      (e.currentTarget.value % 4 == 0 && e.currentTarget.value % 100 != 0) ||
      e.currentTarget.value % 400 == 0
    ) {
      date.add(new Option(`29`, "29"));
    } else {
      date.lastChild.remove();
    }
  }
});

button.addEventListener("click", () => {
  var dateOfBirth = parseInt(userDate.value);
  var monthOfBirth = new Date(`${userMonth.value} 1 2022`).getMonth() + 1;
  var yearOfBirth = parseInt(userYear.value);

  var tempYearOfBirth = yearOfBirth;

  const currentDate = parseInt(date.value);
  const currentMonth = new Date(`${month.value} 1 2022`).getMonth() + 1;
  const currentYear = parseInt(year.value);

  const months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  var totalMonth = 0;
  var tempTotalMonth = 0;
  var totalYear = 0;

  //calculating remaining days in the date of birth month
  if (
    (yearOfBirth % 4 == 0 && yearOfBirth % 100 != 0) ||
    yearOfBirth % 400 == 0
  ) {
    months[2] = 29;
    var days = months[monthOfBirth] - dateOfBirth;
  } else {
    months[2] = 28;
    var days = months[monthOfBirth] - dateOfBirth;
  }

  //function 1

  //used to calculate the days and months upto next year coming from the dob
  const function1 = function (monthOfBirth) {
    tempTotalMonth = monthOfBirth;
    while (tempTotalMonth < 12) {
      tempTotalMonth++;
      totalMonth++;
    }
    yearOfBirth++;
    tempTotalMonth = 0;
    monthOfBirth = 1;

    //finally we are in jan 1, birth year + 1
    function2();
  };

  //function 2

  const function2 = function () {
    //first while loop is used to calculate the days and months and years from jan 1, birth year + 1 to
    //jan 1, current year
    while (yearOfBirth != currentYear) {
      (yearOfBirth % 4 == 0 && yearOfBirth % 100 != 0) || yearOfBirth % 400 == 0
        ? (months[2] = 29)
        : (months[2] = 28);
      if (tempTotalMonth < 12) {
        tempTotalMonth++;
        totalMonth++;
        if (tempTotalMonth == 12) {
          tempTotalMonth = 0;
          yearOfBirth++;
        }
        if (totalMonth % 12 == 0) {
          totalYear++;
        }
      }
    }
    tempTotalMonth = 0;
    var tempMonthOfBirth = 1;

    //second while loop is used to calculate the remaining days and months from current year till the given current month
    while (tempMonthOfBirth != currentMonth) {
      tempTotalMonth++;
      tempMonthOfBirth++;
      totalMonth++;
      if (totalMonth % 12 == 0) {
        totalYear++;
      }
    }

    //now we have remaining days in the given current month
    //adding current month days with the previously calculated days [remaining days in the birth month]
    days = days + currentDate;

    //converting the remaining days to months [the months subtracted that is based on month of birth]
    (tempYearOfBirth % 4 == 0 && tempYearOfBirth % 100 != 0) ||
    tempYearOfBirth % 400 == 0
      ? (months[2] = 29)
      : (months[2] = 28);
    while (days > months[monthOfBirth]) {
      days = days - months[monthOfBirth];
      totalMonth++;
    }

    //if month of birth and given month is same and the date of given month is more than the birth date then a year is added
    if (monthOfBirth === currentMonth && currentDate >= dateOfBirth) {
      totalYear++;
    }

    result.innerHTML = `<h2>Your Age is </h2><span class="color">${totalYear}</span> years <span class="color">${
      totalMonth % 12
    } </span> months <span class="color">${days}</span> days`;
  };

  //function 3

  const function3 = function () {
    //calculating remaining days in the date of birth month
    if (
      (yearOfBirth % 4 == 0 && yearOfBirth % 100 != 0) ||
      yearOfBirth % 400 == 0
    ) {
      months[2] = 29;
      var days = months[monthOfBirth] - dateOfBirth;
    } else {
      months[2] = 28;
      var days = months[monthOfBirth] - dateOfBirth;
    }

    //if current month and date of month are same means then only days will be calculated
    if (currentMonth == monthOfBirth) {
      result.innerHTML = `<h2>Your Age is </h2><span class="color">${totalMonth}</span> months <span class="color">${days}</span> days`;
    } else {
      var tempMonthOfBirth = monthOfBirth;
      tempMonthOfBirth++;
      while (tempMonthOfBirth != currentMonth) {
        tempMonthOfBirth++;
        totalMonth++;
      }

      days = days + currentDate;
      (tempYearOfBirth % 4 == 0 && tempYearOfBirth % 100 != 0) ||
      tempYearOfBirth % 400 == 0
        ? (months[2] = 29)
        : (months[2] = 28);
      while (days > months[monthOfBirth]) {
        days = days - months[monthOfBirth];
        totalMonth++;
      }
      result.innerHTML = `<h2>Your Age is </h2><span class="color">${totalMonth}</span> months <span class="color">${days}</span> days`;
    }
  };

  //starting
  if (
    //these will be used when birthday exceeds current date and month and year

    currentYear < yearOfBirth ||
    (currentMonth < monthOfBirth && currentYear == yearOfBirth) ||
    (currentMonth == monthOfBirth &&
      currentYear == yearOfBirth &&
      currentDate < dateOfBirth)
  ) {
    result.innerHTML = "Date of birth needs to be earlier than the age at date";
  } else if (currentMonth === monthOfBirth && currentDate === dateOfBirth) {
    //if same month and same date is given means then will be used

    result.innerHTML = `<h2>Your Age is </h2><span class="color">${
      currentYear - yearOfBirth
    }</span> years <span class="color">0</span> months <span class="color">0</span> days`;
  } else if (
    currentYear == yearOfBirth &&
    (currentMonth == monthOfBirth || currentMonth != monthOfBirth)
  ) {
    function3();
  } else {
    function1(monthOfBirth);
  }
});

//for year

document.querySelector(".year").innerHTML = new Date().getFullYear();
