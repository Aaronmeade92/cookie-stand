'use strict'

var locationsArray = [FirstAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki]

function Location(minCustomers, maxCustomers, avgCookieSales) {
  this.minCustomers = name;
  this.maxCustomers = color;
  this.avgCookieSales = price;
}

var FirstAndPike = new Location(23, 65, 6.3)
// var FirstAndPike = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookieSales: 6.3,
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
// }

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']

// for (var i = 0; i < hoursOpen.length ; i++) {
//  console.log(getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers));
//
//  var ulElement = document.getElementById('FirstAndPike')
//
//  var customerDataEl = document.createElement('li');
//  customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers);
//  ulElement.appendChild(customerDataEl);
// }

for (var i = 0; i < hoursOpen.length ; i++) {
 console.log(getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers));

 var ulElement = document.getElementById('a')

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers);
 ulElement.appendChild(customerDataEl);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var SeaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2,
    hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

// for (var i = 0; i < hoursOpen.length; i++) {
//  console.log(getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers));
//
//  var ulElement = document.getElementById('SeaTac Airport')
//
//  var customerDataEl = document.createElement('li');
//  customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers);
//  ulElement.appendChild(customerDataEl);
// }


for (var i = 0; i < hoursOpen.length ; i++) {
 console.log(getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers));

 var ulElement = document.getElementById('a')

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers);
 ulElement.appendChild(customerDataEl);
}


var SeattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7,
    hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

// for (var i = 0; i < hoursOpen.length; i++) {
//  console.log(getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers));
//
//  var ulElement = document.getElementById('SeattleCenter')
//
//  var customerDataEl = document.createElement('li');
//  customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers);
//  ulElement.appendChild(customerDataEl);
// }


var CapitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
    hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

// for (var i = 0; i < hoursOpen.length; i++) {
//  console.log(getRandomInt(CapitolHill.minCustomers, CapitolHill.maxCustomers));
//
//  var ulElement = document.getElementById('Capitol Hill')
//
//  var customerDataEl = document.createElement('li');
//  customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(CapitolHill.minCustomers, CapitolHill.maxCustomers);
//  ulElement.appendChild(customerDataEl);
// }


var Alki = {
  minCustomers: 2,
  maxCustomers: 14,
  avgCookieSales: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
};

// for (var i = 0; i < hoursOpen.length; i++) {
//  console.log(getRandomInt(Alki.minCustomers, Alki.maxCustomers));
//
//  var ulElement = document.getElementById('Alki')
//
//  var customerDataEl = document.createElement('li');
//  customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(Alki.minCustomers, Alki.maxCustomers);
//  ulElement.appendChild(customerDataEl);
// }


// var customerDataEl = document.createElement('li');
// customerDataEl.appendChild(customerDataEl);
// customerDataEl.textContent = getRandomInt(Alki.minCustomers, Alki.maxCustomers)
// customerDataEl.appendChild(customerDataEl);



// var locationsObject = {
//   0: FirstandPike,
//   1: SeaTacAirport,
//   2: SeattleCenter,
//   3: CapitolHill,
//   4: Alki
// };

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
// for (var i = 0; i < 16 ; i++) {
//  (getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers))
// }
