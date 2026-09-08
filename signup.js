const backBtn = document.querySelector("#backBtn");

const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#pssword");
const signupBtn = document.querySelector("#signupBtn");

backBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

signupBtn.addEventListener("click", function () {
  if (
    fullName.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== "" &&
    confPassword.value.trim() === password.value
  ) {
    window.location.href = "tasks.html";
  } else {
    alert("Please enter your information.");
  }
});
