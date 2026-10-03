const backBtn = document.querySelector("#backBtn");
const signup = document.querySelector("#signupform");

const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirmPassword");

const userName = localStorage.getItem("userName");

backBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

signup.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confPasswordValue = confPassword.value.trim();

  if (!nameValue || !emailValue || !passwordValue || !confPasswordValue) {
    alert("Please fill in all fields.");
    return;
  }

  if (passwordValue !== confPasswordValue) {
    alert("Password do not match! ❗");
    return;
  }

  localStorage.setItem("userName", nameValue);

  window.location.href = "tasks.html";
});
