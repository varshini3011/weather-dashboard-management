const apiKey = "0f0b7793f0ef476bcc1e7e265bccbe61"; // 🔑 Get it from https://openweathermap.org/api

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `🌥 ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

    const icon = data.weather[0].icon;
    document.getElementById("weatherIcon").src =`https://home.openweathermap.org/api_keys${icon}@2x.png`;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
}
