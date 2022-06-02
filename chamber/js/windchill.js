const temperature = parseFloat(document.querySelector('.weather-temp').textContent);
const windspeed = parseFloat(document.querySelector('.weather-windSpeed-val').textContent);
const windchill = document.querySelector('.weather-windChill-val');

if (temperature <= 50 && windspeed > 3) {
    windchill.textContent = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temperature*Math.pow(windspeed,0.16));
}
else {
    windchill.textContent = "N/A"
}
