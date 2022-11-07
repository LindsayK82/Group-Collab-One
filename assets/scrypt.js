// const currentDataURL = `https://ohmanda.com/api/horoscope/`

// const getHoroscopeData = function (horoscopeData) {
//   const callback = function (each) 
//     {
//       fetch(currentDataURL).then(function (response) {
//       response.json().then(function (data) {
//         displayWeather(data, city);
//       });
//     });
//   }
// }
fetch(`https://any.ge/horoscope/api/?sign=aquarius&type=daily&day=today`)
.then(response => response.json())
.then(json => {
	this.data = json;
});


  var horoscopeFormEl = document.querySelector("#horoscope-search-form");
var horoscopeInputEl = document.querySelector("#horoscope");
var horoscopeContainerEl = document.querySelector("#current-horoscope-container");