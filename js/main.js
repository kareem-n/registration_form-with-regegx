let loginBtn = document.querySelector("#loginBtn");
let loginForm = document.querySelector("#loginForm");
let loginInputs = document.querySelectorAll("#loginForm input");
let alertErrors = document.querySelector("#loginForm #alert");

// users import from local storage

localStorage.setItem(
  "users",
  JSON.stringify([
    { email: "kareem", password: "123" },
    { email: "kareemnasser1369@gmail.com", password: "1234" },
  ])
);

// login errors

let errors = [];

let users = JSON.parse(localStorage.getItem("users"));

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let userEmail = "";
  let userPassword = "";
  for (let i = 0; i < loginInputs.length; i++) {
    if (loginInputs[i].name == "email") {
      userEmail = loginInputs[i].value;
    }
    if (loginInputs[i].name == "password") {
      userPassword = loginInputs[i].value;
    }
  }

  users.forEach((user, i) => {
    if (user.email === userEmail) {
      if (user.password === userPassword) {
        console.log("user found");
        alertErrors.innerHTML = `log in successfully`;
        alertErrors.classList.replace("alert-danger", "alert-success");
        errors = [];
        return;
      } else {
        errors = ["email or password is wrong"];
      }
    } else {
      errors = ["email or password is wrong"];
    }

    if (users.length - 1 == i) {
      if (errors.length > 0) {
        console.log(errors);
        alertErrors.innerHTML = `${errors[0]}`;
        alertErrors.classList.add("alert", "alert-danger");
      }
    }
  });
});

const checkInputs = () => {
  for (let i = 0; i < loginInputs.length; i++) {
    if (loginInputs[i].value != "") {
      loginBtn.classList.remove("disabled");
    } else {
      loginBtn.classList.add("disabled");
      return;
    }
  }
};

for (let i = 0; i < loginInputs.length; i++) {
  loginInputs[i].addEventListener("input", function () {
    checkInputs();
  });
}
