'use strict'

function CoffeeStores(name, minHr, maxHr, cupsPerCust, poundsPerCust) {
  this.time = ['6am', '7am', '8am', '9am', '10am', '11am', '12 noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
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
  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr;
  };
  this.listElements = function() {
    for (var i = 0; i < this.time.length; i++) {
      this.hourCust.push(this.generateRandom(i)); //generates/stores hourly customers
      this.hourlyCupSold.push((this.hourCust[i] * this.cupsPerCust)); //stores hourly cups sold
      this.hourlyLbSold.push((this.hourCust[i] * this.poundsPerCust)); //stores hourly lbs sold
      this.perCupConver.push(this.hourlyCupSold[i]/20); //stores cups to beans conversion
      this.hourlyCupConversionPlusLb.push((this.hourCust[i] * this.cupsPerCust/20) + this.hourlyLbSold[i]); //stores total beans sold in the hour
    }
  };
  this.renderTable = function() {
    this.listElements(); //stores data into 5 arrays
    var sectEl = document.getElementById('test');
    var tblEl = document.createElement('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    tblEl.appendChild(thEl);
    for (var i = 0; i < this.time.length; i++) {
      var tdEl = document.createElement('th');
      tdEl.textContent = this.time[i];
      tblEl.appendChild(tdEl);
      }
    trEl.textContent = 'Lbs Sold/Hr';
    for (var j = 0; j < this.time.length; j++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.hourlyLbSold[j].toFixed(1);
      trEl.appendChild(tdEl);
    }
    var trEl2 = document.createElement('tr');
    trEl2.textContent = 'Customers/Hr';
    for (var j = 0; j < this.time.length; j++) {
      var tdEl2 = document.createElement('td');
      tdEl2.textContent = this.hourCust[j];
      trEl2.appendChild(tdEl2);
    }
    var trEl3 = document.createElement('tr');
    trEl3.textContent = 'Cups/Hr';
    for (var j = 0; j < this.time.length; j++) {
      var tdEl3 = document.createElement('td');
      tdEl3.textContent = this.hourlyCupSold[j].toFixed(1);
      trEl3.appendChild(tdEl3);
    }
    var trEl4 = document.createElement('tr');
    trEl4.textContent = 'Lb Beans Sold/Hr';
    for (var j = 0; j < this.time.length; j++) {
      var tdEl4 = document.createElement('td');
      tdEl4.textContent = this.hourlyLbSold[j].toFixed(1);
      trEl4.appendChild(tdEl4);
    }
    tblEl.appendChild(trEl); //sorry for DRY, couldn't get my nested forloop in a loop to run correctly
    tblEl.appendChild(trEl2);
    tblEl.appendChild(trEl3);
    tblEl.appendChild(trEl4);
    sectEl.appendChild(tblEl);
  }
}
var pikePlace = new CoffeeStores('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new CoffeeStores('Capitol Hill', 32, 48, 3.2, .4);
var spl = new CoffeeStores('Seattle Public Library', 49, 75, 2.6, .2);
var slu = new CoffeeStores('South Lake Union', 35, 88, 1.3, 3.7);
var seatac = new CoffeeStores('Seatac Airport', 68, 124, 1.1, 2.7);
var webSales = new CoffeeStores('Websales', 3, 6, 0, 6.7);

pikePlace.renderTable();
capHill.renderTable();
spl.renderTable();
slu.renderTable();
seatac.renderTable();
webSales.renderTable();
