'use-strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
//////////////////////Desturcturing Arrays////////////////////////////

// //Destructuing uses the [] to assign multiple variables to the array that is being destructured.

// const [a, b, c] = arr;
// console.log(a, b, c);

// const [h, i, j] = arr;
// console.log(h, i, j);

// const [x, y, z] = restaurant.categories;
// console.log(x, y, z);

// const [s, t, d] = restaurant.starterMenu;
// console.log(s, t, d);

//------------------How to skip elements during assignment/destructuring--------------------------------

// //The gap inbetween the variables is how we skip elements when destructuring Arrays.

// const [a, , b] = restaurant.categories;
// console.log(a, b);

// const [c, , , d] = restaurant.starterMenu;
// console.log(c, d);

//------------------How to switch variables in an array using destructuring--------------------------------

// const orders = {
//   numbers: ['first', 'second', 'third'],
// };
// console.log('Example 1');
// let [one, two, three] = orders.numbers;
// console.log(one, two, three); //output = first second third

// console.log('Example 2');
// [three, two, one] = [one, two, three]; //<--Here we are switching the variables.
// console.log(one, two, three); //output = third second first

// console.log('Example 3');
// [one, two, three] = [three, two, one]; //<--Here we are switching the variables>
// console.log(one, two, three); //output = first second third

//------------------Using a function to ?????????---------------------------------------------------------
