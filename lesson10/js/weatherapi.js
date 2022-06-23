// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//API URL with arguments
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=6c4951197d9add3bbb5ef3b85302732f';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // this is temporary for development only

        currentTemp.innerHTML = `<strong>${data['list'][0]['main']['temp'].toFixed(0)}</strong>`;

        const iconsrc = `https://openweathermap.org/img/w/${data["list"][0]["weather"][0].icon}.png`;
        const desc = data["list"][0]["weather"][0].description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
    });