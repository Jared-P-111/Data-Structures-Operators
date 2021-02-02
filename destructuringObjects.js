'use-strict';

///////////////////////////////////////SAMPLE OBJECT///////////////////////////////////////////
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',

  //Arrays
  categories: ['ItalianPOS0', 'PizzeriaPOS1', 'VegetarianPOS2', 'OrganicPOS3'],
  //prettier-ignore
  starterMenu: ['FocacciaPOS0','BruschettaPOS1','Garlic BreadPOS2','Caprese SaladPOS3',],

  mainMenu: ['PizzaPOS0', 'PastaPOS1', 'RisottoPOS2'],

  //Object openingHours
  openingHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //It is critical that the arguments match the object keys your passing in when your useing this strategy. remember that index is not important with
  //this strategy.
  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

/////////////////////////////////Destructuring Objects/////////////////////////////////

//Notes: In an object the order is not important like it is in an array.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Reassigning the names of the variables while destructuring the object.

const { name: resturantName, openingHours: hours, categories: tags } = restaurant;
console.log(resturantName, hours, tags);

//Default values
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//In order to use the obj to assign new variables we have to use a code block inside of () to make this work.
//otherwise javascript will give an error.
({ a, b } = obj);
console.log(a, b);
