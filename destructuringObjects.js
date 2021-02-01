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
};

/////////////////////////////////Destructuring Objects/////////////////////////////////

//Notes: In an object the order is not important like it is in an array.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Reassigning the names of the variables while destructuring the object.

const { name: resturantName, openingHours: hours, categories: tags } = restaurant;
console.log(resturantName, hours, tags);

const people = {
  names: ['jared', 'Maya', 'James'],
};
