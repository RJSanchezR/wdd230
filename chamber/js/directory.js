const requestURL = 'json/data.json';
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
    let businessName = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let logo = document.createElement('img');

    logo.className = 'businessImg';
    card.className = 'businessData';
    businessName.className = 'business-name';
    address.className = 'business-add';
    phone.className = 'business-phone';
    website.className = 'business-website';
    businessName.textContent = `${business["name"]}`;
    address.textContent = `${business["street"]} ${business["city"]} ${business["state"]} ${business["zipcode"]}`;
    phone.textContent = `${business["phone"]}`;
    website.textContent = `${business["website"]}`;

    logo.setAttribute('src', `${business["imageurl"]}`);
    logo.setAttribute('alt', `Logo of ${business["name"]}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(businessName);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);


    document.querySelector('div.cards section').appendChild(card);

}