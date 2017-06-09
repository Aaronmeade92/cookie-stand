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
function Customers(){
  Math.random();
};

Customers();

console.log(Customers * FirstAndPike.avgCookieSales)

  console.log('The average number of cookies sold per customer is ' + FirstAndPike.avgCookieSales)

var SeaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2
};

  console.log('The average number of cookies sold per customer is ' + SeaTacAirport.avgCookieSales)

var SeattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7
};

  console.log('The average number of cookies sold per customer is ' + SeattleCenter.avgCookieSales)

var CapitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3
};

console.log('The average number of cookies sold per customer is ' + CapitolHill.avgCookieSales)

var Alki = {
  minCustomers: 2,
  maxCustomers: 14,
  avgCookieSales: 4.6
};

console.log('The average number of cookies sold per customer is ' + Alki.avgCookieSales)
