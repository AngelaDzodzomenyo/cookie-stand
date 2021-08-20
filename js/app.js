'use strict';

console.log('Hello!');

// const locationsDiv = document.getElementById('locations');

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


// const seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   randomCustPerHour: function(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: function() {
//     let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
//     let hourlyCookieTotal = randomCust*this.avgCookieSale
//     hourlyCookieTotal = Math.round(hourlyCookieTotal)
//     console.log(hourlyCookieTotal)
//     return hourlyCookieTotal
//   },
//   salePerHourArray: [],
//   currentSalePerHour: function(){
//    for(let i=0; i < hours.length; i++){
//      console.log(this)
//     this.salePerHourArray.push(this.dailySales());
//   }
// }
// }


// const tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   randomCustPerHour: function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: function() {
//     let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
//     let hourlyCookieTotal = randomCust*this.avgCookieSale
//     hourlyCookieTotal = Math.round(hourlyCookieTotal)
//     console.log(hourlyCookieTotal)
//   },
//   salePerHourArray: [],
//   currentSalePerHour: function(){
//    for(let i=0; i < hours.length; i++){
//     this.salePerHourArray.push(this.dailySales());
//   }
// }
// }




// const dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   randomCustPerHour: function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: function() {
//     let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
//     let hourlyCookieTotal = randomCust*this.avgCookieSale
//     hourlyCookieTotal = Math.round(hourlyCookieTotal)
//     console.log(hourlyCookieTotal)
//   },
//   salePerHourArray: [],
//   currentSalePerHour: function(){
//    for(let i=0; i < hours.length; i++){
//     this.salePerHourArray.push(this.dailySales());
//   }
// },
// }




// const paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   AagCookieSale: 2.3,
//   randomCustPerHour: function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: function() {
//     let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
//     let hourlyCookieTotal = randomCust*this.avgCookieSale
//     hourlyCookieTotal = Math.round(hourlyCookieTotal)
//     console.log(hourlyCookieTotal)
//   },
//   salePerHourArray: [],
//   currentSalePerHour: function(){
//    for(let i=0; i < hours.length; i++){
//     this.salePerHourArray.push(this.dailySales());
//   }
// },
// }




// const lima = {
//   location:'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   randomCustPerHour: function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: function() {
//     let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
//     let hourlyCookieTotal = randomCust*this.avgCookieSale
//     hourlyCookieTotal = Math.round(hourlyCookieTotal)
//     console.log(hourlyCookieTotal)
//   },
//   salePerHourArray: [],
//   currentSalePerHour: function(){
//    for(let i=0; i < hours.length; i++){
//     this.salePerHourArray.push(this.dailySales());
//   }
// },
// }

// function _makeElement(tag, parent, text) {
//   const element = document.createElement(tag);
//   parent.appendChild(element);
//   if (text) {
//     element.textContent = text;
//   }
//   return element;
// }

// //location 
// function renderLocation(location) {
//   let total = 0;
//   const articleElem = _makeElement('article', locationsDiv, null);
//   _makeElement('h3', articleElem, location.name);
//   const ulElem = _makeElement('ul', articleElem, null)
//   for (let i = 0; i < hours.length; i++) {
//     const text = `${hours[i]}: ${location.salePerHourArray[i]} cookies`;
//     total += location.salePerHourArray[i];
//     _makeElement('li', ulElem, text);
//   }
//   let totalsString = `Total: ${total} cookies`;
//   _makeElement('li', ulElem, totalsString);
// }


// const locationsArray = [seattle, tokyo, dubai, paris, lima]

// function renderAllLocations() {
//   for (let i = 0; i < locationsArray.length; i++) {
//     const currentLocation = locationsArray[i]
//     currentLocation.currentSalePerHour()
//     renderLocation(currentLocation);
//   }
// }

// renderAllLocations();




//open <article>
//location as a title on <h3>
//i want <ul> and <li> to hold time 
//then close </article>

const locationsDiv = document.getElementById('storeLocations')

function Store(location, min, max, avgCookieSale) {
  this.location = location;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookieSale = avgCookieSale;
  this.salePerHourArray = [];
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
  Store.allStores.push(this);  //
}

Store.prototype.randomCustPerHour = function() {
       let min = Math.ceil(this.minCust);
       let max = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (max - min + 1) + min);
}
Store.prototype.salePerHour = function() {
  for(let i=0; i < this.hours.length; i++){
    let customers = this.randomCustPerHour();
    let totalCookiesSold = customers*this.avgCookieSale
    totalCookiesSold = Math.round(totalCookiesSold)
        this.salePerHourArray.push(totalCookiesSold);
  }
}
Store.allStores = [];

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 2.3);



function allSales() {
  for (let i = 0; i < Store.allStores.length; i++) {
     Store.allStores[i].salePerHour()
     console.log(Store.allStores[i])
  }
}
allSales();

function _makeElement(tag, parent, text) {
    const element = document.createElement(tag);
    parent.appendChild(element);
    if (text) {
      element.textContent = text;
    }
    return element;
  }

//create loop like 222-227 to display all locations

Store.prototype.renderSingleLocation = function(body) {
  let total = 0;
  const rowElem = document.createElement('tr');
  body.appendChild(rowElem);
  _makeElement('th', rowElem, this.location);
  for (let i = 0; i < this.hours.length; i++) {
    let cookiesThisHour = this.salePerHourArray[i];
    total += cookiesThisHour;
    _makeElement('td', rowElem, cookiesThisHour);
  }
  _makeElement('td', rowElem, total)
}


function renderAllLocations () {
  const table = document.getElementById('table')
  let tbodyElem = _makeElement('tbody', table, null);
  for (let i = 0; i < Store.allStores.length; i++) {
    Store.allStores[i].renderSingleLocation(tbodyElem);
  }
}

function makeTheHead(){
  const table = _makeElement('table', locationsDiv)
  table.id = "table"
  const theadElem = _makeElement('thead', table, null);
  const rowElem = _makeElement('tr', theadElem, null);
  _makeElement('th', rowElem)
  let hours = Store.allStores[0].hours
  for (let i = 0; i < hours.length; i++){
  let hour = hours[i]
  _makeElement('td', rowElem, hour)
  } 
  _makeElement('th', rowElem, 'Total')
}

function makeTheFooter() {
  const table = document.getElementById('table')
  const tfootElem = _makeElement('tfoot',table, null);
  const rowElem = _makeElement('tr', tfootElem, null);
  _makeElement('th', rowElem, 'Hourly Total');
  let hourlyTotal = 0;
  let grandTotal = 0;
  let hours = Store.allStores[0].hours
  for (let i = 0; i < hours.length; i++) {
    for (let j = 0; j < Store.allStores.length; j++) {
      let currentLocation = Store.allStores[j];
      hourlyTotal += currentLocation.salePerHourArray[i]
    }
    _makeElement('td', rowElem, hourlyTotal);
    grandTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  _makeElement('td', rowElem, grandTotal);
}


makeTheHead();
renderAllLocations();
makeTheFooter();