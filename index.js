const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 15 },
  { name: 'Book', price: 10 },
  { name: 'PlayStation', price: 300 },
  { name: 'Computer', price: 1000 },
  { name: 'Mouse', price: 5 },
  { name: 'Keyboard', price: 12 },
];

//Use filter method to filter all item that are over or equal 100 dollars
const filteredArray = items.filter((item) => {
  return item.price >= 100;
});
console.log(filteredArray);

//use map to alter each item
const mapArray = items.map((item) => {
  return item.price * 2;
});

console.log(mapArray);

//find method in an array used to find the item that costs 100 dollars
const findItem = items.find((item) => {
  return item.price === 100;
});

console.log(findItem);

// forEach used for every single element in the array
items.forEach((item) => {
  console.log(item.name);
});

//some will return true or false
const inExpensiveItems = items.some((item) => {
  return item.price <= 10;
});

console.log(inExpensiveItems);

//every item fits condition
const everyItems = items.every((item) => {
  return item.price <= 10;
});

console.log(everyItems);

//reduce method to find total price
const reduceItems = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(reduceItems);

//include method checks if array contains a item
const numbers = [1, 2, 4, 5, 6];
items.includes(7);
