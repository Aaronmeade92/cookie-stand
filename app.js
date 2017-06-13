'use strict'

function Location(minCustomers, maxCustomers, avgCookieSales) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
}

var FirstAndPike = new Location(23, 65, 6.3)
var SeaTacAirport = new Location(3, 24, 1.2)
var SeattleCenter = new Location(11, 38, 3.7)
var CapitolHill = new Location(20, 38, 2.3)
var Alki = new Location(2, 14, 4.6)

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
var storeLocations = [FirstAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 0; i < storeLocations.length ; i++) {
  {

 var ulElement = document.getElementById('cookieSales')

 var customerDataEl = document.createElement('tr');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers);
 ulElement.appendChild(customerDataEl);

 var customerRowsEl = document.createElement('tr');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers);
 ulElement.appendChild(customerRowsEl);

 var customerRowsEl = document.createElement('tr');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers);
 ulElement.appendChild(customerRowsEl);

 var customerRowsEl = document.createElement('tr');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(CapitolHill.minCustomers, CapitolHill.maxCustomers);
 ulElement.appendChild(customerRowsEl);

 var customerRowsEl = document.createElement('tr');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(Alki.minCustomers, Alki.maxCustomers);
 ulElement.appendChild(customerRowsEl);
}

for (var i = 0; i < hoursOpen.length ; i++) {

 var ulElement = document.getElementById('cookieSales')

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers);
 ulElement.appendChild(customerDataEl);

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers);
 ulElement.appendChild(customerDataEl);

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers);
 ulElement.appendChild(customerDataEl);

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(CapitolHill.minCustomers, CapitolHill.maxCustomers);
 ulElement.appendChild(customerDataEl);

 var customerDataEl = document.createElement('td');
 customerDataEl.textContent = hoursOpen[i] + ': ' + getRandomInt(Alki.minCustomers, Alki.maxCustomers);
 ulElement.appendChild(customerDataEl);
  }
}
//var customerDataEl = document.createElement('tr');
