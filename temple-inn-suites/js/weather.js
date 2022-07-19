const city = document.querySelector('.weather-city');
const currentTemp = document.querySelector('.weather-temp');
const weatherIcon = document.querySelector('.weather-image');
const captionDesc = document.querySelector('.weather-desc');
const humidity = document.querySelector('.humidity');

const base_url = 'https://api.openweathermap.org/data/2.5/weather';
const city_name = 'Rexburg';
const state_code = 'ID';
const country_code = 'US';
const appid = '6c4951197d9add3bbb5ef3b85302732f';
const units = 'imperial';

const url = `${base_url}?q=${city_name},${state_code},${country_code}&units=${units}&appid=${appid}`;


fetch(url)
    .then((response) => response.json())
    .then((data) => {

        const temperature = data['main']['temp'];
        
        const iconsrc = `https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`;
        
        const desc = data['weather'][0].description;

        const humid = data['humidity']

        currentTemp.textContent = Math.round(temperature);
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
        humidity.textContent = humid;
        city.textContent = `${city_name}, ${state_code}`;
    });