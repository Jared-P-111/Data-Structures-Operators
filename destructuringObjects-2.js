//Destucturing simply implies breaking down a complex structure into simpler parts.

/////////////////////////////////////////////////////////////////////////////
/////////////////////Destructuring Object Using Defaults/////////////////////
/////////////////////////////////////////////////////////////////////////////
{
  const student = {
    name: 'Jared Pisell',
    age: 39,
    scores: {
      maths: 74,
      english: 63,
      science: 85,
    },
  };

  const student2 = {
    firstName: 'Glad',
    lastName: 'Chinda',
    country: 'Nigeria',
  };
  //prettier-ignore
  const displaySummary = function ({name, scores:{ maths = 0, english = 0, science = 0 }}) {
    console.log('Hello ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your english score is ' + english);
    console.log('Your Science score is ' + science);
  };
  displaySummary(student);

  const { firstName, lastName, country } = student2; //Variables need to be the same name as the object keys.
  console.log(firstName, lastName, country);
  const { fName, lName, kountry } = student2;
  console.log(fName, lName, kountry);
}
//////////////////////////////////////////////////////////////////////////
///////////////Reassigning variables with () and destructuring////////////
//////////////////////////////////////////////////////////////////////////
{
  let student = {
    firstName: 'Glad',
    lastName: 'Chinda',
    country: 'Nigeria',
  };

  let country = 'Canada';
  let firstName = 'John';
  let lastName = 'Doe';

  //Reassign firstname and lastname using destructuring
  //Enclose in a pair of paren, since this is an assignment expression without this js would think its a block
  ({ firstName, lastName } = student);
  console.log(firstName, lastName, country); //Notice Canada is getting its value from the variable above. =>
}
///////////////////////////////////////////////////////////////////////////////
////////////////////////Different Variable Names/////////////////////////////
//////////////////////////////////////////////////////////////////////////////
{
  const person = {
    name: 'Jared Pisell',
    country: 'USA',
  };

  const { name: fullName, country: place, age: years = 39 } = person;
  console.log(
    `I am ${fullName} from the ${place}, and I am ${years} years old.`
  );
}
///////////////////////////////////////////////////////////////////////////////
/////////////////////////Array Destructuring///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*COMMENTED CAUSE IT BREAKS QUOKKA
  const rgb = [255, 200, 0];
  const [red, green, blue] = rgb;
  console.log(`Red: ${red} Green: ${green} Blue: ${blue}`);

  const rgb = [200];
  const [red = 255, green, blue = 255] = rgb;
  console.log(`Red: ${red} Green: ${green} Blue: ${blue}`);
*/
//////////////////////////////////////////////////////////////////////////////
/////////////////////Array Destuct Assignment/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
{
  let red = 100;
  let green = 200;
  let blue = 50;

  const rgb = [200, 255, 100];

  [red, green] = rgb;

  console.log(`R: ${red}, G: ${green}, B: ${blue}`);
}
//////////////////////////////////////////////////////////////////////////////
/////////////////////Variable Swapping///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
{
  let width = 300;
  let height = 400;
  const landscape = true;

  console.log(`${width} x ${height}`);

  if (landscape) {
    [width, height] = [height, width];
    console.log(`${width} x ${height}`);
  }
}
///////////////////////////////////////////////////////////////////////////////
////////////////////Nested Array Destructuring/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
{
  const color = ['#FF00FF', [255, 0, 255], 'RGB: 255, 0, 255'];
  const [hex, [red, green, blue], rgb] = color;
  console.log(hex, red, green, blue, rgb);
}
///////////////////////////////////////////////////////////////////////////////
/////////////////////////////Cloning Arrays///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
{
  const rainbow = [
    'red',
    'blue',
    'orange',
    'green',
    'violet',
    'indigo',
    'yellow',
  ];
  const rainbowCloneByReference = rainbow;

  console.log(rainbow === rainbowCloneByReference); //True cause this is a reference
  rainbowCloneByReference.splice(3); //Splice mutates the array so one effects the other.

  console.log(rainbow);
  console.log(rainbowCloneByReference);

  const rainbow2 = [
    'red',
    'blue',
    'orange',
    'green',
    'violet',
    'indigo',
    'yellow',
  ];

  //Old way of cloning an array.
  const rainbowClone2 = rainbow2.slice();

  console.log(rainbow2 === rainbowClone2); //Entirely new array and genuiune clone there is no reference.
  console.log(rainbow2);
  console.log(rainbowClone2);

  const rainbow3 = [
    'red',
    'blue',
    'orange',
    'green',
    'violet',
    'indigo',
    'yellow',
  ];
  //Using the spread operator and destructuring this is the new and best way.
  const [...rainbowClone3] = rainbow3;

  console.log(rainbow3 === rainbowClone3); //Entirely new array and genuiune clone there is no reference.
  console.log(rainbowClone3);
}
///////////////////////////////////////////////////////////////////////////////////
////////////////////////Mixed Destructuring Obj & Array////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
{
  const person = {
    name: 'Data Sage',
    age: 39,
    location: {
      country: 'USA',
      city: 'Murrieta',
      corrdinates: [49.2877, -123.1207],
    },
  };

  //Here we assign local variables by destructuring an object that also has an array in it.
  //prettier-ignore
  const {name, location:{country, city, corrdinates: [lat, lng]}} = person;
  console.log(
    `I am ${name} from ${city}, ${country}. Lat: ${lat}, Long: ${lng} Muhahaha!`
  );
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////Destructured Function Parameters/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
{
  const person = {
    name: 'Data Sage',
    age: 39,
    location: {
      country: 'USA',
      city: 'Murrieta',
      coordinates: [49.2877, -123.1207],
    },
    scores: {
      maths: 100,
      english: 50,
      science: 100,
    },
  };

  //Without Destructuring

  const displaySummary = function (person) {
    console.log('Hello, ' + person.name);
    console.log('Your Math score is ' + person.scores.maths);
    console.log('Your English score is ' + person.scores.english);
    console.log('Your Science score is ' + person.scores.science);
  };

  //With Destructuring
  //prettier-ignore
  const displaySummary2 = function({name, scores: {maths = 0, english = 0, science = 0}, location: {coordinates = [lat, lng]}}){
  console.log('Hello, ' + name);
  console.log('Your Maths score is ' + maths);
  console.log('Your english score is ' + english);
  console.log('Your science score is ' + science);
  console.log('your location is: ' + coordinates )
};
  displaySummary(person);
  displaySummary2(person);
}
