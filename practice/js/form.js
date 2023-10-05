const ERRORS_CONFIG = {
  userName: {
    message: "Please, add name",
  },
  userPassword: {
    message: "Please, add password",
  },
  userEmail: {
    message: "Please, add email",
  },
  userAgree: {
    message: "Please, agree",
  },
};

function showError(errorType) {
  const errorText = ERRORS_CONFIG[errorType].message;
  const errorWrapper = document.querySelector(".error");

  errorWrapper.textContent = errorText;
  errorWrapper.classList.add("active");
}

function submitForm() {
  const errorWrapper = document
    .querySelector(".error")
    .classList.remove("active");
  const userName = document.querySelector("#userName").value;
  const userPassword = document.querySelector("#userPassword").value;
  const userEmail = document.querySelector("#userEmail").value;
  const userAgree = document.querySelector("#userAgree").checked;
}

if (!userName) {
  showError("userName");
  return false;
}
if (!userPassword) {
  showError("userPassword");
  return false;
}
if (!userEmail) {
  showError("userEmail");
  return false;
}
if (!agree) {
  showError("userAgree");
  return false;
}

// function submitForm() {
//   const errorWrapper = document
//     .querySelector(".error")
//     .classList.remove("active");

//   const inputCollection = document.querySelectorAll(".form input");
//   for (let i = 0; i < inputCollection.length; i++) {
//     let valueKey = "";
//   }
// }
