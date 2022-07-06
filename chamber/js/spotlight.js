const b1title = document.querySelector("#title1");
const b1img = document.querySelector("#pic1");
const moto1 = document.querySelector("#moto1");
const b1email = document.querySelector("#email1");
const b1phone = document.querySelector("#phone1");
const b1website = document.querySelector("#web1");

const b2title = document.querySelector("#title2");
const b2img = document.querySelector("#pic2");
const moto2 = document.querySelector("#moto2");
const b2email = document.querySelector("#email2");
const b2phone = document.querySelector("#phone2");
const b2website = document.querySelector("#web2");

const b3title = document.querySelector("#title3");
const b3img = document.querySelector("#pic3");
const moto3 = document.querySelector("#moto3");
const b3email = document.querySelector("#email3");
const b3phone = document.querySelector("#phone3");
const b3website = document.querySelector("#web3");

const requestURL = 'json/data.json';

fetch(requestURL)
    .then(response => response.json())
    .then(data => {

        const business = data['business'];
        const companies = [];

        business.forEach(company => {
            if (company.membership == "gold" || company.membership == "silver") {
                companies.push(company);
            }
        });

        let times = 3;
        let counter = 0;
        for (var i = 0; i < times; i++) {
            let randomNumLimit = companies.length;
            let randomNum = Math.floor(Math.random() * randomNumLimit);
            let tempCompany = companies.splice(randomNum, 1);
            counter++
            if (counter == 1) {
                b1title.textContent = tempCompany[0]["name"];
                moto1.textContent = tempCompany[0]["moto"];
                b1email.textContent = tempCompany[0]["email"];
                b1website.textContent = `Website`;
                b1phone.textContent = tempCompany[0]["phone"];

                b1website.setAttribute('href', tempCompany[0]["website"]);
                b1website.setAttribute('target', "_blank");

                b1phone.setAttribute('href', `tel:${tempCompany[0]["phone"]}`);

                b1img.setAttribute('src', tempCompany[0]["imageurl"]);
                b1img.setAttribute('alt', `The Logo of ${tempCompany[0]["name"]}`);
                b1img.setAttribute('width', tempCompany[0]["width"])
                b1img.setAttribute('height', tempCompany[0]["height"])
                b1img.setAttribute('loading', 'lazy');

            } else if (counter == 2) {
                b2title.textContent = tempCompany[0]["name"];
                moto2.textContent = tempCompany[0]["moto"];
                b2email.textContent = tempCompany[0]["email"];
                b2website.textContent = `Website`;
                b2phone.textContent = tempCompany[0]["phone"];

                b2website.setAttribute('href', tempCompany[0]["website"]);
                b2website.setAttribute('target', "_blank");

                b2phone.setAttribute('href', `tel:${tempCompany[0]["phone"]}`);

                b2img.setAttribute('src', tempCompany[0]["imageurl"]);
                b2img.setAttribute('alt', `The Logo of ${tempCompany[0]["name"]}`);
                b2img.setAttribute('width', tempCompany[0]["width"])
                b2img.setAttribute('height', tempCompany[0]["height"])
                b2img.setAttribute('loading', 'lazy');

            } else {
                b3title.textContent = tempCompany[0]["name"];
                moto3.textContent = tempCompany[0]["moto"];
                b3email.textContent = tempCompany[0]["email"];
                b3website.textContent = `Website`;
                b3phone.textContent = tempCompany[0]["phone"];

                b3website.setAttribute('href', tempCompany[0]["website"]);
                b3website.setAttribute('target', "_blank");

                b3phone.setAttribute('href', `tel:${tempCompany[0]["phone"]}`);

                b3img.setAttribute('src', tempCompany[0]["imageurl"]);
                b3img.setAttribute('alt', `The Logo of ${tempCompany[0]["name"]}`);
                b3img.setAttribute('width', tempCompany[0]["width"])
                b3img.setAttribute('height', tempCompany[0]["height"])
                b3img.setAttribute('loading', 'lazy');

            };
        }
    });
// let businessName = document.createElement('h2');
// let logo = document.createElement('img');
// let email = document.createElement('p');
// let phone = document.createElement('a');
// let website = document.createElement('a');

// logo.className = 'businessImg';
// card.className = 'businessData';
// businessName.className = 'business-name';
// address.className = 'business-add';
// phone.className = 'business-phone';
// website.className = 'business-website';

//     businessName.textContent = `${business["name"]}`;
//     email.textContent = `${business["email"]}`;
//     phone.textContent = `${business["phone"]}`;
//     website.textContent = `${business["website"]}`;

//     logo.setAttribute('src', `${business["imageurl"]}`);
//     logo.setAttribute('alt', `Logo of ${business["name"]}`);
//     logo.setAttribute('loading', 'lazy');

//     phone.setAttribute('href', `tel:${business["phone"]}`);

//     website.setAttribute('href', `${business["website"]}`);
//     website.setAttribute('target', "_blank");
// }