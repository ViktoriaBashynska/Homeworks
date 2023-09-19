"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral([" "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([" "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Who are you?
function whoAreYou() {
  var age = parseInt(prompt("Please, enter your age"));

  if (!isNaN(age)) {
    if (age >= 0) {
      if (age <= 11) {
        alert("You are a child");
      }

      if (age > 11 && age <= 17) {
        alert("You are a teenager");
      }

      if (age > 17 && age <= 59) {
        alert("You are an adult");
      }

      if (age > 59 && age <= 120) {
        alert("You can grumble and nothing will happen to you");
      }

      if (age > 120) {
        alert("That's probably impossible, but if it's true, you're a mummy");
      }
    } else {
      console.log("You are not borned yet");
    }
  } else {
    console.log("Enter number");
  }
} // Symbol


function _Symbol() {
  var userNumber = parseInt(prompt("Please, enter number from 1 to 9 to get symbol"));

  if (!isNaN(userNumber)) {
    if (userNumber >= 1 && userNumber <= 10) {
      switch (userNumber) {
        case 1:
          alert("!");
          break;

        case 2:
          alert("@");
          break;

        case 3:
          alert("#");
          break;

        case 4:
          alert("$");
          break;

        case 5:
          alert("%");
          break;

        case 6:
          alert("^");
          break;

        case 7:
          alert("&");
          break;

        case 8:
          alert("*");
          break;

        case 9:
          alert("(");
          break;

        default:
          break;
      }
    } else {
      alert("Please, enter number from 1 to 9");

      _Symbol();
    }
  } else {
    alert("Enter number");

    _Symbol();
  }
} // Sum


function sum() {
  var firstNumber = parseInt(prompt("Enter first number"));
  var secondNumber = parseInt(prompt("Enter second number"));
  var a = firstNumber;
  var b = secondNumber;

  if (!isNaN(a && b)) {
    for (var _sum = 0; a <= b; a++) {
      _sum += a;
      console.log("The sum of all numbers from ".concat(firstNumber, " to ").concat(secondNumber, " is ").concat(_sum));
    }
  } else {
    console.log("Number, please");
  }
} // Common divisor


function commonDivisor() {
  var comDiv;
  var a = parseInt(prompt("Enter first number"));
  var b = parseInt(prompt("Enter second number"));

  for (var i = 0; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      comDiv = i;
    }
  }

  alert("Common divisor of ".concat(a, " and ").concat(b, " is ").concat(comDiv));
} // All divisors


function allDivisors() {
  var userNumber = parseInt(prompt("Enter a number, please"));

  for (var i = 0; i <= userNumber; i++) {
    userNumber / i;

    if (userNumber % i === 0) {
      console.log(i);
    }
  }
} // 34567''
// 01234 index


function checkPalindrom() {
  var number = prompt("Add number");

  if (number.length !== 0) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] !== number[number.length - 1 - i]) {
        alert("".concat(number, " is not a palindrom"));
        return false;
      } else {
        alert("".concat(number, " is palindrom"));
        return false;
      }
    }
  } else {
    alert("please, enter something");
    checkPalindrom();
  }
} // Discount


function Discount() {
  var purchaseAmount = parseInt(prompt("Enter purchase amount"));

  if (!isNaN(purchaseAmount)) {
    var procent = 0;

    if (purchaseAmount < 200) {
      alert("Your discount is 0%. Total: ".concat(purchaseAmount, " UAH"));
      return false;
    }

    if (purchaseAmount >= 200 && purchaseAmount <= 300) {
      procent = 3;

      var _sum2 = purchaseAmount - purchaseAmount * procent / 100;

      alert("Your discount is 3%. Total: ".concat(_sum2, " UAH"));
      return false;
    }

    if (purchaseAmount > 300 && purchaseAmount <= 500) {
      procent = 5;

      var _sum3 = purchaseAmount - purchaseAmount * procent / 100;

      alert("Your discount is 5%. Total: ".concat(_sum3, " UAH"));
      return false;
    }

    if (purchaseAmount > 500) {
      procent = 7;

      var _sum4 = purchaseAmount - purchaseAmount * procent / 100;

      alert("Your discount is 7%. Total: ".concat(_sum4, " UAH"));
      return false;
    }
  } else {
    alert("enter numbers");
    Discount();
  }
} // 10 numbers
// Day of thee week


function dayOfTheWeek() {
  var days = ["Monday 🫠", "Tuesday 🫣", "Wednesday 😐", "Thursday 🥺", "Friday 🥳", "Saturday 😎", "Sunday 😵‍💫"];
  var currDay = 0;

  while (confirm("today is ".concat(days[currDay], ". Wanna see next?"))) {
    currDay = (currDay + 1) % days.length;
  }
} // Guess number


function guessNumber() {
  var min = 0;
  var max = 100;
  var steps = 0;

  function guessNumberAction(min, max) {
    var middle = parseInt((min - max) / 2 + max);
    var isSuccess = confirm("Is your number ".concat(middle, "?"));

    if (isSuccess) {
      alert("Thanks for a game. We spent ".concat(steps, " steps!"));
      return false;
    } else {
      steps++;
      var isLarger = confirm("Your number is larger than ".concat(middle, "?"));
      isLarger ? guessNumberAction(middle, max) : guessNumberAction(min, middle);
    }
  }

  guessNumberAction(min, max);
} // Date


function date() {
  var userDate = prompt("Add date");
  var dateArray = userDate.split(".");
  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day >= 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day >= 31) {
        nextDay = 1;
        nextMonth++;
      }

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        }
      } else {
        if (day >= 28) {
          nextDay = 1;
          nextMonth++;
        }
      }

      break;
  }

  if (nextMonth > 12) {
    nextDay = 1;
    nextMonth = 1;
    nextYear++;
  }

  var addZero = function addZero(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  alert("Next date is ".concat(addZero(nextDay), ".").concat(addZero(nextMonth), ".").concat(addZero(nextYear)));
} //  --------------------- Functions
// Number of arguments


function numArguments() {
  var userNumbers = prompt("Enter something separated by a space").split(_templateObject());
  alert("Number of arguments: ".concat(userNumbers.length));
} // Two numbers


function twoNumbers() {
  var userNumbers = prompt("Enter 2 numbers separated by a space").split(_templateObject2());
  var a = userNumbers[0];
  var b = userNumbers[1];

  if (!isNaN(a) && !isNaN(b)) {
    if (a < b) {
      alert("(".concat(userNumbers[0], " < ").concat(userNumbers[1], "). Result: -1"));
    }

    if (a > b) {
      alert("(".concat(userNumbers[0], " > ").concat(userNumbers[1], "). Result: 1"));
    }

    if (a === b) {
      alert("(".concat(userNumbers[0], " = ").concat(userNumbers[1], "). Result: 0"));
    }
  } else {
    alert("Enter numbers, please");
    twoNumbers();
  }
} //  n = 3
// 1 * (n-1) * (n-2)
// Factorial


function getFactorial() {
  var n = prompt("Add any number");

  if (n == 0 || n == 1) {
    console.log(n);
  } else {
    var fact = parseInt(n);

    for (var i = 1; i < n; i++) {
      fact *= i;
      console.log(fact);
    }
  }
} // 1,2,3 -> 123


function toNumber() {
  var userNumbers = prompt("Enter numbers separated by space").split(_templateObject3());
  alert(userNumbers.join(""));
} // Area


function getArea() {
  var side = prompt("Enter 2 sides separated by space (or just 1)").split(_templateObject4());

  if (!side[1]) {
    sqArea = Math.pow(side[0], 2);
  } else {
    sqArea = side[0] * side[1];
  }

  alert("Area with sides ".concat(side, " = ").concat(sqArea));
}