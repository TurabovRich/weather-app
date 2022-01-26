function myFunction() {
  document.getElementById('div').classList.add("active")
}

let weather = {
  fetchWeather: function () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('.search-bar').value}&units=metric&appid=264c953e43ceb85c72e9c285118c3e56`).then((response) => response.json()).then((data) => this.displayWeather(data))
  },

  displayWeather: function (data) {

    const name = data.name;
    const humidity = data.main.humidity
    const description = data.weather[0].description;
    const icon = data.weather[0].icon
    const temp = Math.round(data.main.temp);
    const speed = data.wind.speed;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    // document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
}

document.querySelector(".search-button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

