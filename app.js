'use strict'

var FirstAndPike = new Location(23, 65, 6.3, 'First and Pike')
var SeaTacAirport = new Location(3, 24, 1.2, 'SeaTac Airport')
var SeattleCenter = new Location(11, 38, 3.7, 'Seattle Center')
var CapitolHill = new Location(20, 38, 2.3, 'Capitol Hill')
var Alki = new Location(2, 14, 4.6, 'Alki')

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
var storeLocations = [FirstAndPike, SeaTacAirport, SeattleCenter, CapitolHill, Alki]
var storeNames = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki']

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Location(minCustomers, maxCustomers, avgCookieSales, storeLocation) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
  this.storeLocation = storeLocation;
}

var tableBodyEl = document.getElementById('cookieSales');

function makeRow(item){
  var newRowEl = document.createElement('tr');
  tableBodyEl.appendChild(newRowEl);

  var locationColumnEl = document.createElement('td');
  locationColumnEl.textContent = item.storeLocation;
  newRowEl.appendChild(locationColumnEl);

for (var i = 0; i < hoursOpen.length; i++) {


  var priceDataEl = document.createElement('td');
  priceDataEl.textContent = Math.floor((getRandomInt(item.minCustomers, item.maxCustomers)) * item.avgCookieSales);
  newRowEl.appendChild(priceDataEl);

  }
}


for (var i = 0; i < storeLocations.length; i++) {
  makeRow(storeLocations[i]);
}
