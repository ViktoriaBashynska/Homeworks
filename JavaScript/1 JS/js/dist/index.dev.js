"use strict";

// Name
function HelloName() {
  var HelloName = prompt('What is your name?');

  if (HelloName === null) {
    console.log("oh...wanna try again?");
  }

  if (HelloName && HelloName.length >= 2) {
    console.log("Hello, ".concat(HelloName, "!\uD83D\uDC4B\uD83C\uDFFC"));
  }

  if (HelloName.length < 2) {
    console.log("Name is too short");
  }
} // Age


function userAge() {
  var userBirthYear = parseInt(prompt("Please, write your year of birth"));
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var userAge = currentYear - userBirthYear;

  if (!isNaN(userBirthYear)) {
    if (currentYear < userBirthYear) {
      console.log("You are not borned yet");
    } else {
      var _userAge = currentYear - userBirthYear;

      console.log(_userAge);
    }
  } else {
    console.log("Add valid year");
  }

  if (userAge >= 30 && userAge <= 89) {
    console.log("We are ordering Voltaren Gel from the nearest pharmacy");
  }

  if (userAge >= 90 && userAge <= 249) {
    console.log("wow, that's impressive");
  }

  if (userAge >= 250) {
    console.log("You're probably immortal");
  }
} // Perimeter 


function SquarePerimeter() {
  var SquareSideLength = parseInt(prompt("Enter the length of the side of the square"));

  if (!isNaN(SquareSideLength)) {
    if (SquareSideLength <= 0) {
      console.log('You try to do impossible thing, my friend. It is illegal, btw');
    } else {
      var _SquarePerimeter = SquareSideLength * 4;

      console.log(_SquarePerimeter);
    }
  } else {
    console.log("Add number, please");
  }
} // Circle area


function CircleArea() {
  var CircleRadius = parseInt(prompt("Enter the radius of the circle"));

  if (!isNaN(CircleRadius)) {
    if (CircleRadius <= 0) {
      console.log('This circle does not exist');
    } else {
      var _CircleArea = Math.PI * Math.pow(CircleRadius, 2);

      console.log(_CircleArea);
    }
  } else {
    console.log("You only had one job....Enter a number");
  }
} // Speed 


function Speed() {
  var Kilometers = parseInt(prompt("How many kilometers are there from point A to point B?"));
  var Hours = parseInt(prompt("How much time (hours) you want to spend on the trip"));

  if (!isNaN(Kilometers) || !isNaN(Hours)) {
    if (Kilometers <= 0 || Hours <= 0) {
      console.log('It does not work like that...');
    } else {
      var _Speed = Kilometers / Hours;

      console.log("".concat(_Speed, " km/h"));
    }
  } else {
    console.log("Should we try again?");
  }
} // Currency Converter


function Converter() {
  var Euro = 0.93;
  var Amount = parseInt(prompt("How many dollars do you want to exchange?"));
  var Dollar = Amount * Euro;

  if (!isNaN(Amount)) {
    if (Amount <= 0) {
      console.log('These are hard times, I understand');
    } else {
      console.log("".concat(Dollar.toFixed(2), " \u20AC"));
    }
  } else {
    console.log("Should we try again?");
  }
} // 0,1 & 0,2 
// function Sum() {
//     const first = 0.1;
//     const second = 0.2;
//     const Sum = (Math.fround(first) + Math.fround(second));
//     console.log(Sum)
// }
// string 1 & number 2 


function StrNum() {
  var string = '2';
  var number = 1;
  console.log((+string + number).toFixed(20));
} // Flash drive 


function FlashDriver() {
  var MemoryCapacity = parseInt(prompt("What is the memory capacity of your flash drive?"));
  var OneFile = 820;

  if (!isNaN(MemoryCapacity)) {
    if (MemoryCapacity >= 820) {
      var Files = "".concat(Math.floor(MemoryCapacity / OneFile), " file(s) weighing 820gb will fit on your flash drive");
      console.log(Files);
    } else {
      console.log("No 820 GB file will fit on your flash drive");
    }
  } else {
    console.log("lets try again");
  }
} // Chocolate 


function Chocolate() {
  var Money = parseInt(prompt("How much money do you have?"));
  var ChocolatePrice = parseInt(prompt("How much is 1 chocolate?"));
  var HowMany = Math.floor(Money / ChocolatePrice);
  var Balance = Money - ChocolatePrice * HowMany;

  if (!isNaN(Money) && !isNaN(ChocolatePrice)) {
    console.log("".concat(HowMany, " chocolate(s) you can buy "));
    console.log("".concat(Balance, " UAH is your balance"));
  } else {
    console.log("please, enter numbers");
  }
} // Number Backwards
// Bank 


function Bank() {
  var Deposit = parseInt(prompt("Enter your deposit"));
  var twoMonth = 365 / 60;
  var Procent = 5;
  var FinalSum = Math.ceil(Deposit / 100 * Procent / twoMonth);
  var Total = FinalSum + Deposit;

  if (!isNaN(Deposit)) {
    if (Deposit >= 0) {
      console.log("".concat(FinalSum, " UAH you've got in 2 month"));
      console.log("".concat(Total, " you'll have in total"));
    } else {
      console.log("Enter more than 0");
    }
  } else {
    console.log("Please, enter number");
  }
}