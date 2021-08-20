
let apiKey = "b5f7ed54ae0857d823da50188ffa0905"
let search_city = "tehran"
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=${apiKey}&units="metric"`
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let now = new Date();
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hour}:${minute}`

function showResulSearch(city) {
  console.log(city)
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  search_city = document.querySelector("#search-input")
  search_city = search_city.value
  apiUrl = `api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=${apiKey}`
  axios.get(apiUrl).then(showResulSearch)
  city.innerHTML=search.value
}

let search_form = document.querySelector("#search-form")
search_form.addEventListener("submit" , search)






// let tempature = document.querySelector("#tempature")
// tempature=parseInt(tempature.value)
// function convert_to_celsius() {
//  let celsiusTemp = Math.round(tempature * 1.8 - 32)
//  tempature.innerHTML=celsiusTemp
// }
// let celsius = document.querySelector("#celsius")
// celsius.addEventListener("click", convert_to_celsius)

// function convert_to_fahrenhit() {
//   console.log(tempature)
//   let fahrenheitTemp = Math.round(tempature / 1.8 + 32);
//   console.log(fahrenheitTemp)
//   tempature.innerHTML=fahrenheitTemp
// }
// let fahrenhit = document.querySelector("#fahrenhit")
// fahrenhit.addEventListener("click" , convert_to_fahrenhit)

