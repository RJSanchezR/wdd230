const requestURL = 'json/temples.json';
const mytemples = document.querySelector('.temples');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temples) {
    let card = document.createElement('div');
    let templeName = document.createElement('h2');
    let basics = document.createElement('div');
    let info = document.createElement('h3');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('a');
    let email = document.createElement('p');
    let basics2 = document.createElement('div');
    let servicesName = document.createElement('h3');
    let services = document.createElement('ul');
    let basics3 = document.createElement('div');
    let operations = document.createElement('h3');
    let sessions = document.createElement('p');
    let closures = document.createElement('p');
    let basics4 = document.createElement('div');
    let historyName = document.createElement('h3');
    let history = document.createElement('p');
    let like = document.createElement('img');
    

    card.className = 'temple-data';
    basics.className = 'temple-basics';
    basics2.className = 'temple-basics2';
    basics3.className = 'temple-basics3';
    basics4.className = 'temple-basics4';
    templeName.className = 'temple-name';
    info.className = 'temple-info';
    image.className = 'temple-img';
    address.className = 'temple-add';
    phone.className = 'temple-phone';
    email.className = 'temple-email';
    servicesName.className = 'temple-servicesN';
    services.className = 'temple-services';
    operations.className = 'temple-operations';
    sessions.className = 'temple-sessions';
    closures.className = 'temple-closure';
    historyName.className = 'temple-historyN';
    history.className = 'temple-history';
    like.className = 'temple-like';


    templeName.textContent = `${temples["name"]}`;
    
    info.textContent = `Information`;
    address.textContent = `Address: ${temples["address"]}`;
    phone.textContent = `Phone: ${temples["telephone"]}`;
    email.textContent = `Email: ${temples["email"]}`;

    servicesName.textContent = `Services`;
    temples['services'].forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        services.appendChild(li);
      });

    operations.textContent = `Sessions/Closures`;
    temples['sessions'].forEach(session => {
        const li = document.createElement('li');
        li.textContent = session;
        sessions.appendChild(li);
      });
    temples['closures'].forEach(closure => {
    const li = document.createElement('li');
    li.textContent = closure;
    closures.appendChild(li);
    });

    historyName.textContent = `History`;
    history.textContent = `${temples["history"]}`;


    like.setAttribute('src', `${temples["like"]}`);
    like.setAttribute('alt', `Image of a like button`);
    like.setAttribute('width', `${temples["like-width"]}`)
    like.setAttribute('height', `${temples["like-height"]}`)
    like.setAttribute('loading', `lazy`);

    image.setAttribute('src', `${temples["image"]}`);
    image.setAttribute('alt', `Image of the ${temples["name"]}`);
    image.setAttribute('width', `${temples["width"]}`)
    image.setAttribute('height', `${temples["height"]}`)
    image.setAttribute('loading', 'lazy');

    phone.setAttribute('href', `tel:${temples["telephone"]}`);

    basics.appendChild(info);
    basics.appendChild(address);
    basics.appendChild(phone);
    basics.appendChild(email);

    basics2.appendChild(servicesName);
    basics2.appendChild(services);

    basics3.appendChild(operations);
    basics3.appendChild(sessions);
    basics3.appendChild(closures);

    basics4.appendChild(historyName);
    basics4.appendChild(history);

    card.appendChild(templeName);
    card.appendChild(image);
    card.appendChild(basics);
    card.appendChild(basics3);
    card.appendChild(basics2);
    card.appendChild(basics4);



    document.querySelector('.temples').appendChild(card);

}