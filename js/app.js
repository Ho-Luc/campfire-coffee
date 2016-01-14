'use strict'

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function CoffeeStores(name, minHr, maxHr, cupsPerCust, poundsPerCust) {
  this.name = name;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.cupsPerCust = cupsPerCust;
  this.poundsPerCust = poundsPerCust;
  this.hourCust = [];
  this.hourlyCupSold = [];
  this.perCupConver = [];
  this.hourlyCupConversionPlusLb = [];
  this.hourlyLbSold = [];
  this.custTotal = 0;
  this.beanTotal = 0;
  this.cupTotal = 0;
  this.beanPlusCups = 0;

  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr;
  };
  this.sumTotals = function() {
    this.listElements();
    for (var i = 0; i < time.length; i++) {
      this.beanPlusCups += this.hourlyCupConversionPlusLb[i];
      this.custTotal += this.hourCust[i];
      this.cupTotal += this.hourlyCupSold[i];
      this.beanTotal += this.hourlyLbSold[i];
    }
  }
  this.listElements = function() {
    for (var i = 0; i < time.length; i++) {
      this.hourCust.push(this.generateRandom(i)); //generates/stores hourly customers
      this.hourlyCupSold.push((this.hourCust[i] * this.cupsPerCust)); //stores hourly cups sold
      this.hourlyLbSold.push((this.hourCust[i] * this.poundsPerCust)); //stores hourly lbs sold
      this.perCupConver.push(this.hourlyCupSold[i]/20); //stores cups to beans conversion
      this.hourlyCupConversionPlusLb.push((this.hourCust[i] * this.cupsPerCust/20) + this.hourlyLbSold[i]); //stores total beans sold in the hour
    }
  };
  // this.render = function() {
  //   createTable();
  // }
}
var pikePlace = new CoffeeStores('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new CoffeeStores('Capitol Hill', 32, 48, 3.2, .4);
var spl = new CoffeeStores('Seattle Public Library', 49, 75, 2.6, .2);
var slu = new CoffeeStores('South Lake Union', 35, 88, 1.3, 3.7);
var seatac = new CoffeeStores('Seatac Airport', 68, 124, 1.1, 2.7);
var webSales = new CoffeeStores('Websales', 3, 6, 0, 6.7);

pikePlace.listElements();
capHill.listElements();
spl.listElements();
slu.listElements();
seatac.listElements();
webSales.listElements();
pikePlace.sumTotals();
capHill.sumTotals();
spl.sumTotals();
slu.sumTotals();
seatac.sumTotals();
webSales.sumTotals();

var createTable = function () {
  var times = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];
  var sectEl = document.getElementById('test');
  var tblEl = document.createElement('table');
  var trEl = document.createElement('tr');

  for (var i = 0; i < times.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
    }
  tblEl.appendChild(trEl);
  var places = [pikePlace, capHill, spl, slu, seatac, webSales];

   for (var i = 0; i < places.length; i++){ //makes row
    var thEl = document.createElement('th');
    var trEl = document.createElement('tr');
    thEl.textContent = places[i].name;
    trEl.appendChild(thEl);

    for (var j = 0; j < time.length; j++){ //makes cells
      var tdEl = document.createElement('td');
      tdEl.textContent = places[i].hourlyCupConversionPlusLb[j].toFixed(1);
      trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = places[i].beanPlusCups.toFixed(1);
    trEl.appendChild(tdEl);
    tblEl.appendChild(trEl);
  }
    sectEl.appendChild(tblEl);
}
createTable();
