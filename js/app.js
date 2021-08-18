'use strict';

console.log('Hello!');

const locationsDiv = document.getElementById('locations');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCustPerHour: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailySales: function() {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  },
  salePerHourArray: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salePerHourArray.push(this.dailySales());
  }
}
}


const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailySales: function() {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  },
  salePerHourArray: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salePerHourArray.push(this.dailySales());
  }
}
}




const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailySales: function() {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  },
  salePerHourArray: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salePerHourArray.push(this.dailySales());
  }
},
}




const paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  AagCookieSale: 2.3,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailySales: function() {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  },
  salePerHourArray: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salePerHourArray.push(this.dailySales());
  }
},
}




const lima = {
  location:'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randomCustPerHour: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dailySales: function() {
    let randomCust = this.randomCustPerHour(this.minCust,this.maxCust)
    let hourlyCookieTotal = randomCust*this.avgCookieSale
    hourlyCookieTotal = Math.round(hourlyCookieTotal)
    console.log(hourlyCookieTotal)
  },
  salePerHourArray: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salePerHourArray.push(this.dailySales());
  }
},
}

function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

//location 
function renderLocation(location) {
  let total = 0;
  const articleElem = _makeElement('article', locationsDiv, null);
  _makeElement('h3', articleElem, location.name);
  const ulElem = _makeElement('ul', articleElem, null)
  for (let i = 0; i < hours.length; i++) {
    const text = `${hours[i]}: ${location.salePerHourArray[i]} cookies`;
    total += location.salePerHourArray[i];
    _makeElement('li', ulElem, text);
  }
  let totalsString = `Total: ${total} cookies`;
  _makeElement('li', ulElem, totalsString);
}


const locationsArray = [seattle, tokyo, dubai, paris, lima]

function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i]
    currentLocation.currentSalePerHour()
    renderLocation(currentLocation);
  }
}

renderAllLocations();




//open <article>
//location as a title on <h3>
//i want <ul> and <li> to hold time 
//then close </article>













