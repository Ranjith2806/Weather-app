// document.getElementById("btn").addEventListener("click", function() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         var latitude = position.coords.latitude;
//         var longitude = position.coords.longitude;
  
//         document.getElementById("latitude").innerHTML = latitude;
//         document.getElementById("longitude").innerHTML = longitude;
//       });
//     } else {
//       document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
//     }
//   });


let weather = {
  "apiKey":"102d87ecacdb632cbb1160b6fddb3e5f",
  fetchWeather: function(city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } =data;
    const { icon,description } = data.weather[0];
    const { temp, humidity } = data.main;
    const{ speed } = data.wind;
    // console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document
  .querySelector(".search button")
  .addEventListener("click",function () {
    weather.search();
  });


  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
      weather.search();
    }
  })


  weather.fetchWeather("Denver");