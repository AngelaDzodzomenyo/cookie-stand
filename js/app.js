
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


const Seattle = {
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
  salePerHour: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salePerHour.push(this.dailySales());
  }
},

displaySales: function(salesArray) {
  //This goes into an article? I think
  const articleElem = documenbt.createElement('article');
  const h1Elem = document.createElement('h1')
  salesDiv.appendChild(h1Elem)
  h1Elem.textContent - this.location
  const olElem = document.createeElement('ol');
  salesDiv.appendChild(articleElem)
  articlesElem.appendChild(olElem)
  olElem.setAttribute("start", "6")

  for (let i =0; i < SeattleStore.salePerHour.length; i++) {
    
  }
  const liElem
}

Seattle.dailySales(),

const Tokyo = {
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
  }
  salePerHour: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salesPerHour.push(this.dailySales());
  }
},
}
Tokyo.dailySales()

const Dubai = {
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
  }
  salePerHour: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salesPerHour.push(this.dailySales());
  }
},
}
Dubai.dailySales()

const Paris = {
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
  }
  salePerHour: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salesPerHour.push(this.dailySales());
  }
},
}
Paris.dailySales()

const Lima = {
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
  }
  salePerHour: [],
  currentSalePerHour: function(){
   for(let i=0; i < hours.length; i++){
    this.salesPerHour.push(this.dailySales());
  }
},
}
Lima.dailySales()























