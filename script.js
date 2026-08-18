const form = document.getElementById("enterCity");
const cityInput = document.getElementById("cityInput");

const city = document.getElementById("city");
const country = document.getElementById("country");

const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weatherIcon");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchCity = cityInput.value;

    getWeather(searchCity);

});


async function getWeather(searchCity) {

    try {

        // Get city information
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchCity)}&count=1&language=en&format=json`
        );

        const data = await response.json();

        const location = data.results[0];

        console.log(location);


        // Display city information
        city.textContent = location.name;
        country.textContent = location.country;

        latitude.textContent = location.latitude;
        longitude.textContent = location.longitude;


        // Get weather using coordinates
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`
        );

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        console.log(current);


        // Display weather
        temperature.textContent =
            Math.round(current.temperature_2m);

        feelsLike.textContent =
            Math.round(current.apparent_temperature) + "°C";

        humidity.textContent =
            current.relative_humidity_2m + "%";

        wind.textContent =
            Math.round(current.wind_speed_10m) + " km/h";


        // Simple weather condition
        if (current.weather_code === 0) {

            condition.textContent = "Clear Sky";
            weatherIcon.textContent = "☀️";

        } else if (current.weather_code <= 3) {

            condition.textContent = "Cloudy";
            weatherIcon.textContent = "☁️";

        } else if (current.weather_code >= 51) {

            condition.textContent = "Rainy";
            weatherIcon.textContent = "🌧️";

        }

    } catch (error) {

        console.log(error);
        condition.textContent = "City not found";

    }
}


getWeather("Lagos");