const allProducts = [
  {
    name: "banana",
    uniqId: 74638,
    price: 8,
    quantity: 200,
    discount: 0.03,
    isDiscount: true,
  },
  {
    name: "cucumber",
    uniqId: 2334,
    price: 4,
    quantity: 100,
    discount: 0,
    isDiscount: false,
  },
  {
    name: "pear",
    uniqId: 234,
    price: 18,
    quantity: 0,
    discount: 0.5,
    isDiscount: true,
  },
  {
    name: "apple",
    uniqId: 3322,
    price: 18,
    quantity: 2,
    discount: 0.1,
    isDiscount: true,
  },
  {
    name: "potato",
    uniqId: 333,
    price: 2,
    quantity: 2000,
    discount: 0,
    isDiscount: false,
  },
  {
    name: "coconut",
    uniqId: 3498,
    price: 80,
    quantity: 10,
    discount: 0.1,
    isDiscount: true,
  },
];
const userCart = [];

function addToCard(id, quantity) {
  const newProd = allProducts.find((el) => el.uniqId === id);
  if (!newProd) {
    console.log(`det finns inte`);
    return false;
  }
  if (newProd.quantity < quantity) {
    console.log(`Du kan inte köpa det`);
    return false;
  }
  userCart.push(newProd);
  setQuantity(newProd.quantity - quantity, id);
}
addToCard(333, 10);

function setQuantity(quantity, id) {
  const newProd = allProducts.findIndex((el) => el.uniqId === id);
  allProducts[newProd].quantity = quantity;
}
