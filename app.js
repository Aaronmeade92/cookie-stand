'use strict'

var locations = [
  'First and Pike',
  'SeaTac Airport',
  'Seattle Center',
  'Capitol Hill',
  'Alki'
];

var locationsObject = {
  0: 'First and Pike',
  1: 'SeaTac Airport',
  2: 'Seattle Center',
  3: 'Capitol Hill',
  4: 'Alki'
};


var FirstAndPike = 'First and Pike'

//var array1 = [locationsObject];

var FirstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min

}

console.log(FirstAndPike);

for (var i = 0; i < 16 ; i++) {
  array1.push( getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers))
}


var SeaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2,
    hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

console.log(SeaTacAirport);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


for (var i = 0; i < 16 ; i++) {
  array1.push( getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers))
}

var SeattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7,
    hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

console.log(SeattleCenter)



for (var i = 0; i < 16 ; i++) {
  array1.push( getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers))
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(11, 38);

var CapitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
    hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

console.log(CapitolHill);

getRandomInt(20, 38);

for (var i = 0; i < 16 ; i++) {
  array1.push( getRandomInt(CapitolHill.minCustomers, CapitolHill.maxCustomers))
}

var Alki = {
  minCustomers: 2,
  maxCustomers: 14,
  avgCookieSales: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

console.log(Alki);

//console.log(array1);

getRandomInt(2, 14);

for (var i = 0; i < 16 ; i++) {
  array1.push( getRandomInt(Alki.minCustomers, Alki.maxCustomers))
}

var ulElement = document.getElementById('Arrays');
console.log(ulElement);

var allStores = [FirstAndPike, SeattleCenter, SeaTacAirport, CapitolHill, Alki];

for (var i = 0; i < allStores.length ; i++) {
  var listItemElement = document.createElement('li');

  listItemElement.textContent = 6 + i + 'am: ' + array1[i];

  ulElement.appendChild(listItemElement);
  console.log(ulElement.children);
}
