let signUp = document.querySelector("#signUp");
let signIn = document.querySelector("#signIn");
let signUpBtn = document.querySelector("#signUpBtn");
let signInBtn = document.querySelector("#signInBtn");
let signInEmail = document.querySelector("#signInEmail");
let passIpnut = document.querySelector("#passInput");
let firstnameInput = document.querySelector("#firstName");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let phoneInput = document.querySelector("#phoneInput");
let lastnameInput = document.querySelector("#lastName");
let signupcheck = document.querySelector("#signupCheck");
let signUpSubmit = document.querySelector("#signUpSubmit");
let submit = document.querySelector("#submit");
let message = document.querySelector("#message");
let agree = document.querySelector('#agree') ; 

let submitBtn = document.querySelector("#submit");
signInBtn.addEventListener("click", function () {
  signIn.classList.remove("d-none");
  signUp.classList.add("d-none");
});
signUpBtn.addEventListener("click", function () {
  signIn.classList.add("d-none");
  signUp.classList.remove("d-none");
});

function nameRegex(text, input) {
  let regex = /^[a-zA-Z-]{2,30}( ){0,1}$/;
  if (regex.test(text) == true) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}

function emailRegex(text) {
  let regex = /^.{0,100}@[a-zA-Z]{3,15}\.[a-z]{2,5}$/;
  if (regex.test(text) == true) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  }
}

function passRegex(text) {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(text) == true) {
    pass.classList.remove("is-invalid");
    pass.classList.add("is-valid");
  } else {
    pass.classList.remove("is-valid");
    pass.classList.add("is-invalid");
  }
}

function phoneRegex(text) {
  let regex = /^01[0125][0-9]{8}$/;
  if (regex.test(text) == true) {
    phoneInput.classList.remove("is-invalid");
    phoneInput.classList.add("is-valid");
  } else {
    phoneInput.classList.remove("is-valid");
    phoneInput.classList.add("is-invalid");
  }
}

firstnameInput.addEventListener("keyup", function () {
  let value = firstnameInput.value;
  nameRegex(value, firstnameInput);
});
lastnameInput.addEventListener("keyup", function () {
  let value = lastnameInput.value;
  nameRegex(value, lastnameInput);
});

email.addEventListener("keyup", function () {
  let text = email.value;
  emailRegex(text);
});

pass.addEventListener("keyup", function () {
  let text = pass.value;
  passRegex(text);
});

phoneInput.addEventListener("keyup", function () {
  let text = phoneInput.value;
  phoneRegex(text);
});
let cont = [firstnameInput, lastnameInput, email, pass, phoneInput];
let users;

if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}
signUpSubmit.addEventListener("click", function () {
  let checker = false;
  for (let i = 0; i < cont.length; i++) {
    if (cont[i].classList.contains("is-valid") == true) {
      checker = true;
    } else {
      checker = false;
      break;
    }
  }
  if (checker == true && agree.checked == true) {
    let user = {
      username: email.value,
      pass: pass.value,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearInputs();

    setTimeout(() => {
      signUp.classList.add("d-none");
      signIn.classList.remove("d-none");
    }, 500);
  }
});

function clearInputs() {
  firstnameInput.value = "";
  lastnameInput.value = "";
  email.value = "";
  pass.value = "";
  phoneInput.value = "";
  agree.checked = false ; 
  firstnameInput.classList.remove("is-valid");
  lastnameInput.classList.remove("is-valid");
  email.classList.remove("is-valid");
  pass.classList.remove("is-valid");
  phoneInput.classList.remove("is-valid");
  firstnameInput.classList.remove("is-valid");
}

submit.addEventListener("click", function () {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username == signInEmail.value &&
      users[i].pass == passIpnut.value
    ) {
      message.classList.remove("d-none");
      message.style.backgroundColor = "aquamarine";
      message.classList.add("rounded-pill");
      message.innerHTML = "valid Data entered";
      console.log(0);
      break;
    } else {
      message.classList.remove("d-none");
      message.style.backgroundColor = "rgb(255, 167, 167)";
      message.classList.add("rounded-pill");
      message.innerHTML = "Invalid Email or password";
      console.log(1);
    }
  }
});
