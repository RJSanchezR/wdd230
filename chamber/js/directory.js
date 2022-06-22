const requestURL = 'https://rjsanchezr.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const business = jsonObject['business'];
        business.forEach(displayBusiness);
    });

let s1 = document.createElement('section');
s1.className = 'bisnes';
document.querySelector('div.cards').appendChild(s1);

function displayBusiness(business) {
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    logo.className = 'businessImg';
    card.className = 'businessData';
    p1.className = 'card-desc';
    h2.textContent = `${business["name"]}`;
    p1.textContent = `Address: ${business["street"]} ${business["city"]} ${business["state"]} ${business["zipcode"]}`;
    p2.textContent = `Phone Number: ${business["phone"]}`;
    p3.textContent = `Website: ${business["website"]}`;

    logo.setAttribute('src', `${business["imageurl"]}`);
    logo.setAttribute('alt', `Logo of ${business["name"]}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);


    document.querySelector('div.cards section').appendChild(card);

}