function getWeather() {
    const cityName = "Kyiv"; // Замініть на назву міста, яке вас цікавить
    const apiKey = "10b6a8df838ed2d9659ee3c63b0d1c8d"; // Ваш API ключ OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Отримані дані про погоду
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Відображення даних на веб-сторінці
            displayWeather(temperature, humidity, windSpeed);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(temperature, humidity, windSpeed) {
    const weatherInfoDiv = document.getElementById("weatherInfo");
    
    // Відображення даних у елементі div
    weatherInfoDiv.innerHTML = `
        <p>Temperature: ${temperature} K</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}
