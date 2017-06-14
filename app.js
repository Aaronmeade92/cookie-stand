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
  return Math.floor(Math.random() * (max - min)) + min;
}


function Location(minCustomers, maxCustomers, avgCookieSales, storeLocation) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSales = avgCookieSales;
  this.storeLocation = storeLocation
}

// var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.getElementById('storeHours')
// tableEl.appendChild(tableBodyEl);

  function makeRow(item){
    //Step 1 - create element
    var newRowEl = document.createElement('tr');

    //Step 2 - Configure/Mutate the ROW element
      var itemDataEl = document.createElement('td');
    itemDataEl.textContent = item.storeLocation ;
    newRowEl.appendChild(itemDataEl);

    var priceDataEl = document.createElement('td');
    priceDataEl.textContent = item.avgCookieSales;
    newRowEl.appendChild(priceDataEl);

    var hoursEl = document.createElement('td');
    hoursEl.textContent = hoursOpen;
    newRowEl.appendChild(hoursEl);

    //Step 3 - Append element to the DOM
    tableBodyEl.appendChild(newRowEl);
  }

  for (var i = 0; i < storeLocations.length; i++) {
    makeRow(storeLocations[i]);
}

// for (var i = 0; i < storeLocations.length ; i++) {
//   {
//
//  var ulElement = document.getElementById('storeHours')
//
//  var customerDataEl = document.createElement('th');
//  customerDataEl.textContent =
//  ulElement.appendChild(customerDataEl);
//
//  var customerRowsEl = document.createElement('th');
//  customerDataEl.textContent = 'SeaTac Airport'
//  ulElement.appendChild(customerRowsEl);
//
//  var customerRowsEl = document.createElement('th');
//  customerDataEl.textContent = 'Seattle Center'
//  ulElement.appendChild(customerRowsEl);
//
//  var customerRowsEl = document.createElement('th');
//  customerDataEl.textContent = 'Capitol Hill'
//  ulElement.appendChild(customerRowsEl);
//
//  var customerRowsEl = document.createElement('th');
//  customerDataEl.textContent = 'Alki'
//   ulElement.appendChild(customerRowsEl);
// }


// for (var i = 0; i < hoursOpen.length ; i++) {
// var newRowEl = document.createElement('tr')
//
//  var ulElement = document.getElementById('cookieSales')
//
//  var customerDataEl = document.createElement('td');
//  customerDataEl.textContent = getRandomInt(FirstAndPike.minCustomers, FirstAndPike.maxCustomers);
//  ulElement.appendChild(newRowEl);
//
//  var customerDataEl = document.createElement('td');
//  customerDataEl.textContent = getRandomInt(SeaTacAirport.minCustomers, SeaTacAirport.maxCustomers);
//  ulElement.appendChild(newRowEl);
//
//  var customerDataEl = document.createElement('td');
//  customerDataEl.textContent = getRandomInt(SeattleCenter.minCustomers, SeattleCenter.maxCustomers);
//  ulElement.appendChild(newRowEl);
//
//  var customerDataEl = document.createElement('td');
//  customerDataEl.textContent = getRandomInt(CapitolHill.minCustomers, CapitolHill.maxCustomers);
//  ulElement.appendChild(newRowEl);
//
//  var customerDataEl = document.createElement('td');
//  customerDataEl.textContent = getRandomInt(Alki.minCustomers, Alki.maxCustomers);
//  ulElement.appendChild(newRowEl);
//   }


for (var i = 0; i < storeLocations.length; i++) {
  makeRow(storeLocations[i])
    }
