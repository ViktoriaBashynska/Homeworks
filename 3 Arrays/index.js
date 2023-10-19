const shoppingList = [
  {
    name: "bread",
    amount: 1,
    price: 10,
    total: 10,
    bought: false,
  },
  {
    name: "cucumber",
    amount: 2,
    price: 7,
    total: 14,
    bought: false,
  },
  {
    name: "tomato",
    amount: 5,
    price: 4,
    total: 20,
    bought: false,
  },
  {
    name: "onion",
    amount: 3,
    price: 5,
    total: 15,
    bought: true,
  },
  {
    name: "croissant",
    amount: 4,
    price: 8.5,
    total: 17,
    bought: true,
  },
  {
    name: "Grapes",
    amount: 7,
    price: 32,
    total: 224,
    bought: false,
  },
];

// Показати список покупок, де спочатку придбані продукти.
// Variant 1
function showList() {
  const boughtProd = shoppingList.filter((el) => el.bought);
  const notBoughtProd = shoppingList.filter((el) => !el.bought);
  const sortedList = notBoughtProd.concat(boughtProd);
  console.log(sortedList);
}

// Variant 2
function showListV2() {
  const sortedList = shoppingList.sort((a, b) => {
    return a.bought - b.bought;
  });
  console.log(sortedList);
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function buyProduct(addProduct) {
  const shoppingListCopy = shoppingList.slice();
  const addProd = shoppingListCopy.findIndex((el) => el.name === addProduct);
  if (shoppingListCopy[addProd].bought === true) {
    console.log(`You've already bought ${addProduct}`);
  } else {
    shoppingListCopy[addProd].bought = true;
    console.log(`You bought ${addProduct}`);
    console.log(shoppingListCopy);
  }
}
// buyProduct(`onion`);
// buyProduct(`cucumber`);

//---------------------------------------------------------------------------------------------------------------------------------------------

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

let newShoppingList = shoppingList.slice(0); // Масив, з якого видаляємо

// Var 1: Видаляє по аргументу

function deleteProduct(prodToDelete) {
  const deleteProd = newShoppingList.findIndex(
    (el) => el.name === prodToDelete
  );
  if (deleteProd >= 0) {
    newShoppingList.splice(deleteProd, 1);
    console.log(newShoppingList, `you've deleted ${prodToDelete}`);
  } else {
    console.log(
      `The product ${prodToDelete} doesn't exist, you can't delete it`
    );
  }
}
// deleteProduct("cucumber");               // icнує
// deleteProduct("grapefruit");            // не існує

// Var 2: Видаляє по prompt

function deleteProductV2() {
  const prodToDelete = prompt("Product to delete");

  const deleteProd = newShoppingList.findIndex(
    (el) => el.name === prodToDelete
  );
  if (deleteProd >= 0) {
    newShoppingList.splice(deleteProd, 1);
    console.log(newShoppingList, `You've deleted ${prodToDelete}`);
  } else {
    console.log(
      `The product ${prodToDelete} doesn't exist, you can't delete it`
    );
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// Додавання покупки в список. Необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addProductV2(prodName, num, price) {
  let listToAdd = shoppingList.slice(0); // Массив, в який додаємо

  const addProd = listToAdd.find((el) => el.name === prodName);
  if (addProd) {
    addProd.amount = addProd.amount + num;
    addProd.total = addProd.price * addProd.amount;
    console.log(addProd);
  } else {
    const newProd = {
      name: prodName,
      amount: num,
      price: price,
      total: price * num,
      bought: false,
    };
    listToAdd.push(newProd);
    console.log(`You've added ${prodName}.`, listToAdd, newProd);
  }
}
// addProductV2("onion", 2);  //збільшить кількість і total
// addProductV2("cucumber", 400);
// addProductV2("banana", 2, 9);   //  Створить новий продукт і додасть до списку

//---------------------------------------------------------------------------------------------------------------------------------------------

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function sumAllProducts() {
  const prodTotal = shoppingList.map((el) => el.total);
  const result = prodTotal.reduce((acc, val) => acc + val);
  console.log(`Total (bought): ${result}`);
}

// Підрахунок суми всіх (не) придбаних продуктів.

function sumNotPurchProducts() {
  const notBought = shoppingList.filter((el) => !el.bought);

  const sum = notBought.map((el) => el.total);
  const result = sum.reduce((acc, val) => acc + val);
  console.log(`Total (not bought): ${result}`);
}

//---------------------------------------------------------------------------------------------------------------------------------------------

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
// Від меншого до більшого

function priceToUp() {
  const sortedList = shoppingList.sort((a, b) => {
    return a.total - b.total;
  });
  console.log(sortedList);
}

function priceToDown() {
  const sortedList = shoppingList.sort((a, b) => {
    return b.total - a.total;
  });
  console.log(sortedList);
}
