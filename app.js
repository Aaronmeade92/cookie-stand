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

var FirstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var total1 = getRandomInt(23, 65);

console.log(total1 * FirstAndPike.avgCookieSales)

  console.log('The average number of cookies sold per customer is ' + FirstAndPike.avgCookieSales)

var SeaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var total2 = getRandomInt(3, 24);

console.log(total2 * SeaTacAirport.avgCookieSales)

  console.log('The average number of cookies sold per customer is ' + SeaTacAirport.avgCookieSales)

var SeattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var total3 = getRandomInt(11, 38);

console.log(total3 * SeattleCenter.avgCookieSales)

  console.log('The average number of cookies sold per customer is ' + SeattleCenter.avgCookieSales)

var CapitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var total4 = getRandomInt(20, 38);

console.log(total4 * CapitolHill.avgCookieSales)

console.log('The average number of cookies sold per customer is ' + CapitolHill.avgCookieSales)

var Alki = {
  minCustomers: 2,
  maxCustomers: 14,
  avgCookieSales: 4.6
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var total5 = getRandomInt(2, 14);

console.log(total5 * Alki.avgCookieSales)

console.log('The average number of cookies sold per customer is ' + Alki.avgCookieSales)

var array = [total1, total2, total3, total4, total5
]
console.log(array)


var ulElement = document.getElementById('Arrays');
console.log(ulElement);

for (var i = 0; i < array.length ; i++) {
  var listItemElement = document.createElement('li');

  listItemElement.textContent = 'Total cookies = ' + array[i];

  ulElement.appendChild(listItemElement);
  console.log(ulElement.children);
}
