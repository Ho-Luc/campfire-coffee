'use strict'

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function CoffeeStores(name, minHr, maxHr, cupsPerCust, poundsPerCust) {
  this.name = name;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.cupsPerCust = cupsPerCust;
  this.poundsPerCust = poundsPerCust;
  this.hourCust = []; //hourly customers
  this.hourlyCupSold = []; //hourly cups sold
  this.hourlyCupConversionPlusLb = []; //adds cups lb to bean lbs
  this.hourlyLbSold = []; //hourly beans sold
  this.custTotal = 0; //daily total customers
  this.beanTotal = 0; //daily bean lb sold
  this.cupTotal = 0; //daily cups sold
  this.beanPlusCups = 0; //daily cups lb + beans lb sold
  this.listElements();
  this.sumTotals();
  this.generateRow(); //populates customer row
  this.locationBeanTotalsRow(); //populates total bean row
}
CoffeeStores.prototype.generateRandom = function() { //RNG
    return Math.floor(Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr;
}
CoffeeStores.prototype.sumTotals = function() { //computes totals from the arrays
  for (var i = 0; i < time.length; i++) {
    this.beanPlusCups += this.hourlyCupConversionPlusLb[i];
    this.custTotal += this.hourCust[i];
    this.cupTotal += this.hourlyCupSold[i];
    this.beanTotal += this.hourlyLbSold[i];
  }
}
CoffeeStores.prototype.listElements = function() { //computes data and stores them in arrays
  for (var i = 0; i < time.length; i++) {
    this.hourCust.push(this.generateRandom(i)); //generates/stores hourly customers
    this.hourlyCupSold.push((this.hourCust[i] * this.cupsPerCust)); //stores hourly cups sold
    this.hourlyLbSold.push((this.hourCust[i] * this.poundsPerCust)); //stores hourly lbs sold
    this.hourlyCupConversionPlusLb.push((this.hourCust[i] * this.cupsPerCust/20) + this.hourlyLbSold[i]); //stores total beans sold in the hour
  }
}
var userInput = document.getElementById('bean-form'); //DOM variables
var newNamedStore = document.getElementById('newStoreTable');

function handleStoreSubmit(event) { //submit handle
  console.log(event);
  event.preventDefault(); //prevents page reload
  if (!event.target.where.value || !event.target.maxCustomers.value || !event.target.maxCustomers.value || !event.target.cups.value || !event.target.pounds.value) {
    return alert('field cannot be empty!'); //prevents empty fields
  }
  var name = event.target.where.value; //form data to variables
  var minHr = parseInt(event.target.minCustomers.value);
  var maxHr = parseInt(event.target.maxCustomers.value);
  var cupsPerCust = parseInt(event.target.cups.value);
  var poundsPerCust = parseInt(event.target.pounds.value);

  var newStore = new CoffeeStores(name, minHr, maxHr, cupsPerCust, poundsPerCust);

  event.target.where.value = null; //clears forms
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.cups.value = null;
  event.target.pounds.value = null;
}
userInput.addEventListener('submit', handleStoreSubmit); //listener

function locationBeanTotals() { //head of bean total table
  var header = ['Location', 'Bean Total (lb)']
  var tblEl = document.getElementById('totals');
  var trEl = document.createElement('tr');
  for (var i = 0; i < header.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = header[i];
    trEl.appendChild(thEl);
  }
  tblEl.appendChild(trEl);
}
locationBeanTotals();

CoffeeStores.prototype.locationBeanTotalsRow = function() { //generates bean totals in rows
  var tblEl = document.getElementById('totals');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.beanPlusCups.toFixed(1);
  trEl.appendChild(tdEl);
  tblEl.appendChild(trEl);
}

function generateTable() { //head of customer table
  var times = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];
  var tblEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
  }
  tblEl.appendChild(trEl);
}
generateTable();

CoffeeStores.prototype.generateRow = function() { //populates cells with customer/hr
  var tblEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var j = 0; j < time.length; j++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourCust[j];
    trEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = this.custTotal;
  trEl.appendChild(tdEl);
  tblEl.appendChild(trEl);
}

var pikePlace = new CoffeeStores('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new CoffeeStores('Capitol Hill', 32, 48, 3.2, .4);
var spl = new CoffeeStores('Seattle Public Library', 49, 75, 2.6, .2);
var slu = new CoffeeStores('South Lake Union', 35, 88, 1.3, 3.7);
var seatac = new CoffeeStores('Seatac Airport', 68, 124, 1.1, 2.7);
var webSales = new CoffeeStores('Websales', 3, 6, 0, 6.7);
