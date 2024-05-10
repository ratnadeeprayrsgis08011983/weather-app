function searchWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = 'bcb39fb4835daad869b41763de941d78';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <div class="weather-item">
                    <p>Temperature: ${data.main.temp}°C</p>
                </div>
                <div class="weather-item">
                    <p>Wind Speed: ${data.wind.speed} km/h</p>
                </div>
                <div class="weather-item">
                    <p>Humidity: ${data.main.humidity}%</p>
                </div>
                <div class="weather-item">
                    <p>Sky Condition: ${data.weather[0].description}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
        });
}
