"strict mode";

const theInput = document.querySelector("input");
const theNotice = document.querySelector("#notice");
const btn = document.querySelector("button");
const form = document.querySelector("#form");
const errorIcon = document.querySelector("#icon--warning");
const inputValue = theInput.value;
const mailFormat =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const show = () => {
  theNotice.style.visibility = "visible";
  errorIcon.style.visibility = "visible";
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let value = inputValue;

  if (mailFormat.test(value)) {
  } else {
    show();
  }
});
