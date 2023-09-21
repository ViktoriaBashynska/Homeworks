// Who are you?
function whoAreYou() {
  const age = parseInt(prompt(`Please, enter your age`));

  if (!isNaN(age)) {
    if (age >= 0) {
      if (age <= 11) {
        alert(`You are a child`);
      }
      if (age > 11 && age <= 17) {
        alert(`You are a teenager`);
      }
      if (age > 17 && age <= 59) {
        alert(`You are an adult`);
      }
      if (age > 59 && age <= 120) {
        alert(`You can grumble and nothing will happen to you`);
      }
      if (age > 120) {
        alert(`That's probably impossible, but if it's true, you're a mummy`);
      }
    } else {
      console.log(`You are not borned yet`);
    }
  } else {
    console.log(`Enter number`);
  }
}

// Symbol
function Symbol() {
  const userNumber = parseInt(
    prompt(`Please, enter number from 1 to 9 to get symbol`)
  );

  if (!isNaN(userNumber)) {
    if (userNumber >= 1 && userNumber <= 10) {
      switch (userNumber) {
        case 1:
          alert(`!`);
          break;
        case 2:
          alert(`@`);
          break;
        case 3:
          alert(`#`);
          break;
        case 4:
          alert(`$`);
          break;
        case 5:
          alert(`%`);
          break;
        case 6:
          alert(`^`);
          break;
        case 7:
          alert(`&`);
          break;
        case 8:
          alert(`*`);
          break;
        case 9:
          alert(`(`);
          break;
        default:
          break;
      }
    } else {
      alert(`Please, enter number from 1 to 9`);
      Symbol();
    }
  } else {
    alert(`Enter number`);
    Symbol();
  }
}

// Sum
function sum() {
  const firstNumber = parseInt(prompt(`Enter first number`));
  const secondNumber = parseInt(prompt(`Enter second number`));
  let a = firstNumber;
  let b = secondNumber;
  if (!isNaN(a && b)) {
    for (let sum = 0; a <= b; a++) {
      sum += a;
      console.log(
        `The sum of all numbers from ${firstNumber} to ${secondNumber} is ${sum}`
      );
    }
  } else {
    console.log(`Number, please`);
  }
}

// Common divisor

function commonDivisor() {
  let comDiv;
  const a = parseInt(prompt(`Enter first number`));
  const b = parseInt(prompt(`Enter second number`));

  for (let i = 0; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      comDiv = i;
    }
  }
  alert(`Common divisor of ${a} and ${b} is ${comDiv}`);
}

// All divisors
function allDivisors() {
  const userNumber = parseInt(prompt(`Enter a number, please`));

  for (let i = 0; i <= userNumber; i++) {
    userNumber / i;
    if (userNumber % i === 0) {
      console.log(i);
    }
  }
}

// 34567''
// 01234 index

function checkPalindrom() {
  let number = prompt(`Add number`);
  if (number.length !== 0) {
    for (let i = 0; i < number.length; i++) {
      if (number[i] !== number[number.length - 1 - i]) {
        alert(`${number} is not a palindrom`);
        return false;
      } else {
        alert(`${number} is palindrom`);
        return false;
      }
    }
  } else {
    alert(`please, enter something`);
    checkPalindrom();
  }
}

// Discount

function Discount() {
  const purchaseAmount = parseInt(prompt(`Enter purchase amount`));
  if (!isNaN(purchaseAmount)) {
    let procent = 0;
    if (purchaseAmount < 200) {
      alert(`Your discount is 0%. Total: ${purchaseAmount} UAH`);
      // return false;
    }
    if (purchaseAmount >= 200 && purchaseAmount <= 300) {
      procent = 3;
      let sum = purchaseAmount - (purchaseAmount * procent) / 100;
      alert(`Your discount is 3%. Total: ${sum} UAH`);
      // return false;
    }
    if (purchaseAmount > 300 && purchaseAmount <= 500) {
      procent = 5;
      let sum = purchaseAmount - (purchaseAmount * procent) / 100;
      alert(`Your discount is 5%. Total: ${sum} UAH`);
      // return false;
    }
    if (purchaseAmount > 500) {
      procent = 7;
      let sum = purchaseAmount - (purchaseAmount * procent) / 100;
      alert(`Your discount is 7%. Total: ${sum} UAH`);
      // return false;
    }
  } else {
    alert(`enter numbers`);
    Discount();
  }
}

// 10 numbers

// Day of thee week

function dayOfTheWeek() {
  const days = [
    "Monday 🫠",
    "Tuesday 🫣",
    "Wednesday 😐",
    "Thursday 🥺",
    "Friday 🥳",
    "Saturday 😎",
    "Sunday 😵‍💫",
  ];
  let currDay = 0;

  while (confirm(`today is ${days[currDay]}. Wanna see next?`)) {
    currDay = (currDay + 1) % days.length;
  }
}

// Guess number
function guessNumber() {
  const min = 0;
  const max = 100;
  let steps = 0;
  function guessNumberAction(min, max) {
    const middle = parseInt((min - max) / 2 + max);
    const isSuccess = confirm(`Is your number ${middle}?`);

    if (isSuccess) {
      alert(`Thanks for a game. We spent ${steps} steps!`);
      return false;
    } else {
      steps++;
      const isLarger = confirm(`Your number is larger than ${middle}?`);
      isLarger
        ? guessNumberAction(middle, max)
        : guessNumberAction(min, middle);
    }
  }
  guessNumberAction(min, max);
}

// Date

function date() {
  const userDate = prompt(`Add date`);
  const dateArray = userDate.split(".");
  const day = +dateArray[0];
  const month = +dateArray[1];
  const year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  let nextDay = day + 1;
  let nextMonth = month;
  let nextYear = year;

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
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
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

  const addZero = (n) => (n < 10 ? `0${n}` : n);
  alert(
    `Next date is ${addZero(nextDay)}.${addZero(nextMonth)}.${addZero(
      nextYear
    )}`
  );
}

//  --------------------- Functions

// Number of arguments

function numArguments() {
  const userNumbers = prompt(`Enter something separated by a space`).split` `;
  alert(`Number of arguments: ${userNumbers.length}`);
}

// Two numbers
function twoNumbers() {
  const userNumbers = prompt(`Enter 2 numbers separated by a space`).split` `;
  const a = userNumbers[0];
  const b = userNumbers[1];
  if (!isNaN(a) && !isNaN(b)) {
    if (a < b) {
      alert(`(${userNumbers[0]} < ${userNumbers[1]}). Result: -1`);
    }
    if (a > b) {
      alert(`(${userNumbers[0]} > ${userNumbers[1]}). Result: 1`);
    }
    if (a === b) {
      alert(`(${userNumbers[0]} = ${userNumbers[1]}). Result: 0`);
    }
  } else {
    alert(`Enter numbers, please`);
    twoNumbers();
  }
}

//  n = 3
// 1 * (n-1) * (n-2)

// Factorial
function getFactorial() {
  const n = prompt(`Add any number`);
  if (n == 0 || n == 1) {
    console.log(n);
  } else {
    let fact = parseInt(n);
    for (let i = 1; i < n; i++) {
      fact *= i;
      console.log(fact);
    }
  }
}
// 1,2,3 -> 123

function toNumber() {
  const userNumbers = prompt(`Enter numbers separated by space`).split` `;
  alert(userNumbers.join(""));
}

// Area

function getArea() {
  const side = prompt(`Enter 2 sides separated by space (or just 1)`).split` `;

  if (!side[1]) {
    sqArea = side[0] ** 2;
  } else {
    sqArea = side[0] * side[1];
  }
  alert(`Area with sides ${side} = ${sqArea}`);
}

// --------------------- Objects
// Car
function showCarInfo() {
  const carProp = {
    manufacturer: "Volvo",
    model: "V60 Cross Country",
    year: 2018,
    avSpeed: 210,
    fuelTankCapacity: 67,
    avFuelConsump: 5.8,
    drivers: ["Ivan Ivanov"],
    getCarDet() {
      for (key in carProp)
        if (typeof carProp[key] !== "function") {
          console.log(`${key}: ${carProp[key]}`);
        }
    },
    getDrivers() {
      console.log(`Current drivers list: ${this.drivers}`);
    },
    addDriver(name) {
      this.drivers.push(name);
      console.log(`//add driver`);
    },
    deleteDriver(name) {
      // delete this.drivers;
      const delDriv = this.drivers.indexOf(name);
      this.drivers.splice(delDriv, 1);
      console.log(`//delete driver`);
    },
    checkDriver(name) {
      if (this.drivers.includes(name)) {
        console.log(`${name} is in the list`);
      } else {
        console.log(`${name} is NOT in the list`);
      }
    },
    getCount(kilometers) {
      const DrivingTime = kilometers / this.avSpeed;
      const DrivingTimeFixed = (kilometers / this.avSpeed).toFixed(1);
      const fuel = ((kilometers / 100) * this.avFuelConsump).toFixed(1);
      const stops = Math.floor(Math.floor(DrivingTime) / 4);
      const totalTime = (+DrivingTimeFixed + +stops).toFixed(1);
      console.log(
        `You need ${totalTime} h. and ${fuel} liters of fuel to drive ${kilometers} km. You need to take ${stops} stops. Driving time w/o stops: ${DrivingTimeFixed} h.`
      );
    },
  };

  carProp.getCarDet();
  // add
  carProp.addDriver(`Petro Petrov`);
  carProp.addDriver(`Dmytro Dmitriev`);
  carProp.getDrivers();
  // delete
  carProp.deleteDriver(`Petro Petrov`);
  carProp.getDrivers();
  carProp.addDriver(`Mark Marchenko`);
  carProp.getDrivers();
  // check
  carProp.checkDriver(`Petro Petrov`);
  carProp.checkDriver(`Mark Marchenko`);
  // count
  carProp.getCount(900);
}
// 23:59:59 -> 00:00:19 -> 00:04:19 -> 04:04:19
// Time
function time() {
  const time = {
    hour: 0,
    minute: 0,
    second: 0,
    normTime() {
      if (this.second > 59) {
        const extraMin = Math.floor(this.second / 60);
        this.minute += extraMin;
        this.second %= 60;
      }
      if (this.minute > 59) {
        const extraHour = Math.floor(this.minute / 60);
        this.hour += extraHour;
        this.minute %= 60;
      }
      if (this.hour >= 12) {
        this.hour %= 12;
      }
    },
    showTime() {
      const addZero = (n) => (n < 10 ? `0${n}` : n);
      console.log(
        `${addZero(this.hour)}:${addZero(this.minute)}:${addZero(this.second)}`
      );
    },
    plusHour(addHour) {
      this.hour += addHour;
      this.normTime();
    },
    plusMin(addMin) {
      this.minute += addMin;
      this.normTime();
    },
    plusSec(addSec) {
      this.second += addSec;
      this.normTime();
    },
  };
  time.hour = 23;
  time.minute = 59;
  time.second = 59;
  time.showTime();
  time.plusHour(0);
  time.plusMin(4);
  time.plusSec(20);
  time.showTime();
}
