var ppm = {
  minHr: 14,
  maxHr: 55,
  cupsPerCust: 1.2,
  poundsPerCust: 3.7,
  generateRandom: function(minHr, maxHr) {
    return Math.floor(Math.random() * (ppm.maxHr - ppm.minHr + 1)) + ppm.minHr;
  },
  hourCust: [],
  hourlyCupSold: [],
  hourlyCupConversionPlusLb: [],
  hourlyLbSold: [],
  test: []
};
var capHill = {
  minHr: 32,
  maxHr: 48,
  cupsPerCust: 3.2,
  poundsPerCust: .4,
  generateRandom: function(minHr, maxHr) {
    return Math.floor(Math.random() * (capHill.maxHr - capHill.minHr + 1)) + capHill.minHr;
  },
  hourCust: [],
  hourlyCupSold: [],
  hourlyCupConversionPlusLb: [],
  hourlyLbSold: [],
  test: []
}
var spl = {
  minHr: 49,
  maxHr: 75,
  cupsPerCust: 2.6,
  poundsPerCust: .2,
  generateRandom: function(minHr, maxHr) {
    return Math.floor(Math.random() * (spl.maxHr - spl.minHr + 1)) + spl.minHr;
  },
  hourCust: [],
  hourlyCupSold: [],
  hourlyCupConversionPlusLb: [],
  hourlyLbSold: [],
  test: []
}
var slu = {
  minHr: 35,
  maxHr: 88,
  cupsPerCust: 1.3,
  poundsPerCust: 3.7,
  generateRandom: function(minHr, maxHr) {
    return Math.floor(Math.random() * (slu.maxHr - slu.minHr + 1)) + slu.minHr;
  },
  hourCust: [],
  hourlyCupSold: [],
  hourlyCupConversionPlusLb: [],
  hourlyLbSold: [],
  test: []
}
var seatac = {
  minHr: 68,
  maxHr: 124,
  cupsPerCust: 1.1,
  poundsPerCust: 2.7,
  generateRandom: function(minHr, maxHr) {
    return Math.floor(Math.random() * (seatac.maxHr - seatac.minHr + 1)) + seatac.minHr;
  },
  hourCust: [],
  hourlyCupSold: [],
  hourlyCupConversionPlusLb: [],
  hourlyLbSold: [],
  test: []
}
var webSales = {
  minHr: 3,
  maxHr: 6,
  cupsPerCust: 0,
  poundsPerCust: 6.7,
  generateRandom: function(minHr, maxHr) {
    return Math.floor(Math.random() * (webSales.maxHr - webSales.minHr + 1)) + webSales.minHr;
  },
  hourCust: [],
  hourlyCupSold: [],
  hourlyCupConversionPlusLb: [],
  hourlyLbSold: [],
  test: []
}
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12 noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
for (var i = 0; i < 15; i++) {
  ppm.hourCust.push(ppm.generateRandom(i));
  ppm.hourlyCupSold.push(Math.floor(ppm.hourCust[i] * ppm.cupsPerCust) + ' cups (' + Math.round(ppm.hourCust[i] * ppm.cupsPerCust/20));
  ppm.hourlyLbSold.push(Math.floor(ppm.hourCust[i] * ppm.poundsPerCust));
  ppm.hourlyCupConversionPlusLb.push(Math.round(ppm.hourCust[i] * ppm.cupsPerCust/20) + ppm.hourlyLbSold[i]);
  capHill.hourCust.push(capHill.generateRandom(i));
  capHill.hourlyCupSold.push(Math.floor(capHill.hourCust[i] * capHill.cupsPerCust) + ' cups (' + Math.round(capHill.hourCust[i] * capHill.cupsPerCust/20));
  capHill.hourlyLbSold.push(Math.floor(capHill.hourCust[i] * capHill.poundsPerCust));
  capHill.hourlyCupConversionPlusLb.push(Math.round(capHill.hourCust[i] * capHill.cupsPerCust/20) + capHill.hourlyLbSold[i]);
  spl.hourCust.push(spl.generateRandom(i));
  spl.hourlyCupSold.push(Math.floor(ppm.hourCust[i] * spl.cupsPerCust) + ' cups (' + Math.round(spl.hourCust[i] * spl.cupsPerCust/20));
  spl.hourlyLbSold.push(Math.floor(ppm.hourCust[i] * spl.poundsPerCust));
  spl.hourlyCupConversionPlusLb.push(Math.round(spl.hourCust[i] * spl.cupsPerCust/20) + spl.hourlyLbSold[i]);
  slu.hourCust.push(slu.generateRandom(i));
  slu.hourlyCupSold.push(Math.floor(slu.hourCust[i] * slu.cupsPerCust) + ' cups (' + Math.round(slu.hourCust[i] * slu.cupsPerCust/20));
  slu.hourlyLbSold.push(Math.floor(slu.hourCust[i] * slu.poundsPerCust));
  slu.hourlyCupConversionPlusLb.push(Math.round(slu.hourCust[i] * slu.cupsPerCust/20) + slu.hourlyLbSold[i]);
  seatac.hourCust.push(seatac.generateRandom(i));
  seatac.hourlyCupSold.push(Math.floor(seatac.hourCust[i] * seatac.cupsPerCust) + ' cups (' + Math.round(seatac.hourCust[i] * seatac.cupsPerCust/20));
  seatac.hourlyLbSold.push(Math.floor(seatac.hourCust[i] * seatac.poundsPerCust));
  seatac.hourlyCupConversionPlusLb.push(Math.round(seatac.hourCust[i] * seatac.cupsPerCust/20) + seatac.hourlyLbSold[i]);
  webSales.hourCust.push(webSales.generateRandom(i));
  webSales.hourlyCupSold.push(Math.floor(webSales.hourCust[i] * webSales.cupsPerCust) + ' cups (' + Math.round(webSales.hourCust[i] * webSales.cupsPerCust/20));
  webSales.hourlyLbSold.push(Math.floor(webSales.hourCust[i] * webSales.poundsPerCust));
  webSales.hourlyCupConversionPlusLb.push(Math.round(webSales.hourCust[i] * webSales.cupsPerCust/20) + webSales.hourlyLbSold[i]);
}
//The for loop above grabs properties from the objects above and pushes them back into arrays for those objects

for (var i = 0; i < 15; i++) {
  ppm.test.push(time[i] + ': ' + ppm.hourlyCupConversionPlusLb[i] + ' lbs [' + ppm.hourCust[i] + ' customers, ' + ppm.hourlyCupSold[i] + ' lbs), ' + ppm.hourlyLbSold[i] + ' lbs to-go]');
  capHill.test.push(time[i] + ': ' + capHill.hourlyCupConversionPlusLb[i] + ' lbs [' + capHill.hourCust[i] + ' customers, ' + capHill.hourlyCupSold[i] + ' lbs), ' + capHill.hourlyLbSold[i] + ' lbs to-go]');
  spl.test.push(time[i] + ': ' + spl.hourlyCupConversionPlusLb[i] + ' lbs [' + spl.hourCust[i] + ' customers, ' + spl.hourlyCupSold[i] + ' lbs), ' + spl.hourlyLbSold[i] + ' lbs to-go]');
  slu.test.push(time[i] + ': ' + slu.hourlyCupConversionPlusLb[i] + ' lbs [' + slu.hourCust[i] + ' customers, ' + slu.hourlyCupSold[i] + ' lbs), ' + slu.hourlyLbSold[i] + ' lbs to-go]');
  seatac.test.push(time[i] + ': ' + seatac.hourlyCupConversionPlusLb[i] + ' lbs [' + seatac.hourCust[i] + ' customers, ' + seatac.hourlyCupSold[i] + ' lbs), ' + seatac.hourlyLbSold[i] + ' lbs to-go]');
  webSales.test.push(time[i] + ': ' + webSales.hourlyCupConversionPlusLb[i] + ' lbs [' + webSales.hourCust[i] + ' customers, ' + webSales.hourlyCupSold[i] + ' lbs), ' + webSales.hourlyLbSold[i] + ' lbs to-go]');
}
//The  loop above grabs from the arrays in the top for loop and concatonates them into a string, then stores them into another array for each object
var h1El1 = document.createElement('h1');
h1El1.textContent = 'Pike Place Market';
document.body.appendChild(h1El1);
for (var i = 0; i < 15; i++) {
    var paragraphLi = document.createElement('li')
    paragraphLi.textContent = ppm.test[i];
    document.body.appendChild(paragraphLi);
}
var h1El2 = document.createElement('h1');
h1El2.textContent = 'Capital Hill';
document.body.appendChild(h1El2);
for (var i = 0; i < 15; i++) {
    var paragraphLi = document.createElement('li')
    paragraphLi.textContent = capHill.test[i];
    document.body.appendChild(paragraphLi);
}
var h1El3 = document.createElement('h1');
h1El3.textContent = 'Seattle Public Library';
document.body.appendChild(h1El3);
for (var i = 0; i < 15; i++) {
    var paragraphLi = document.createElement('li')
    paragraphLi.textContent = spl.test[i];
    document.body.appendChild(paragraphLi);
}
var h1El4 = document.createElement('h1');
h1El4.textContent = 'South Lake Union';
document.body.appendChild(h1El4);
for (var i = 0; i < 15; i++) {
    var paragraphLi = document.createElement('li')
    paragraphLi.textContent = slu.test[i];
    document.body.appendChild(paragraphLi);
}
var h1El4 = document.createElement('h1');
h1El4.textContent = 'Sea-Tac Airport';
document.body.appendChild(h1El4);
for (var i = 0; i < 15; i++) {
    var paragraphLi = document.createElement('li')
    paragraphLi.textContent = seatac.test[i];
    document.body.appendChild(paragraphLi);
}
var h1El4 = document.createElement('h1');
h1El4.textContent = 'Web Sales';
document.body.appendChild(h1El4);
for (var i = 0; i < 15; i++) {
    var paragraphLi = document.createElement('li')
    paragraphLi.textContent = webSales.test[i];
    document.body.appendChild(paragraphLi);
}
//the loops above copies text to the html document for each store.
//Sorry TA's, I can't figure out how to round the data properly for the cups and lbs.
