const sender = document.querySelector("#sender");
const myevent = document.querySelector('#event');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const expl = document.querySelector('#description');
const alertBanner = document.querySelector('.weather-alert');



const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=19.432608&lon=-99.133209&exclude=hourly,minutely&units=imperial&appid=6c4951197d9add3bbb5ef3b85302732f";
let forecastEl = document.getElementsByClassName("forecast-section");

fetch(forecastURL)
    .then((response) => response.json())
    .then((data) => {

        if(data.alerts){
            const header = document.createElement('h3');  
            document.querySelector('.weather-alert').appendChild(header);
            const senderName = data.alerts[0].sender_name;
            const weatherEvent = data.alerts[0].event;
            const startDate = data.alerts[0].start;
            const endDate =  data.alerts[0].end;
            const weatherDesc = data.alerts[0].description;
            const sd = Date(startDate);
            const ed = Date(endDate);

            const myArray = weatherDesc.split("*");
            myArray.forEach((value) => {
                let lines = document.createElement('li');
                lines.textContent = value;
                
                expl.appendChild(lines);
            });
        
            sd.toDateString;
            ed.toDateString;
            
            header.textContent = "Weather Alert!";
            sender.textContent = senderName;
            myevent.textContent = weatherEvent;
            start.textContent = sd;
            end.textContent = ed;

        }
        else {
            alertBanner.classList.toggle('escondido');
        }


        data.daily.forEach((value, index) => {
            if (index > 0 && index <=3) {
                let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                });
                let icon = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
                let temp = value.temp.day.toFixed(0);
                let desc = value.weather[0].description;
                let humi = value.humidity;

                let card = document.createElement('div');
                let city = document.createElement('h3');
                let days = document.createElement('h3');
                let img = document.createElement('img');
                let dscr = document.createElement('p');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');


                city.className = "weather-city";
                days.className = "weather-day";
                img.className = "weather-image";
                dscr.className = "weather-desc";
                p1.className = "weather-temp";
                p2.className = "humidity";

                city.textContent = `Mexico City, MEX`;
                days.textContent = `${dayname} Weather`;
                dscr.textContent = `${desc}`;
                p1.textContent = `Temperature: ${temp} \u00B0F`;
                p2.textContent = `Humidity: ${humi} %`;

                img.setAttribute('src', `${icon}`);
                img.setAttribute('alt', `${desc}`);
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');


                card.appendChild(city);
                card.appendChild(days);
                card.appendChild(img);
                card.appendChild(dscr);
                card.appendChild(p1);
                card.appendChild(p2);

                document.querySelector('.forecast-section').appendChild(card);
            }
        });
    });