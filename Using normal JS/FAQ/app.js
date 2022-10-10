// traversing the dom

// const questionBtn = document.querySelectorAll(".question-btn");
// questionBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    //remove the previously opened one
    questions.forEach(function (item) {
      //clicked one is compared with all others.  If not matched means then other ones are closed
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    //selecting the article of the clicked btn
    question.classList.toggle("show-text");
  });
});
