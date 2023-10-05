"use strict";

var ERRORS_CONFIG = {
  userName: {
    message: "Please, add name"
  },
  userPassword: {
    message: "Please, add password"
  },
  userEmail: {
    message: "Please, add email"
  },
  userAgree: {
    message: "Please, agree"
  }
};

function showError(errorType) {
  var errorText = ERRORS_CONFIG[errorType].message;
  var errorWrapper = document.querySelector(".error");
  errorWrapper.textContent = errorText;
  errorWrapper.classList.add("active");
}

function submitForm() {
  var errorWrapper = document.querySelector(".error").classList.remove("active");
  var inputCollection = document.querySelectorAll(".form input");

  for (var i = 0; i < inputCollection.length; i++) {
    var valueKey = "";
  }
}