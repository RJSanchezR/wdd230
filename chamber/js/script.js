// Last modified and current year on footer

new Date().getFullYear()

document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// Hamburger menu for responsive page

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// For the Date displayed
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { 
	dateStyle: "full" 
}).format(now);

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// For the Banner that shows on Mondays and Tuesdays

const banner = document.querySelector(".banner");

if (d.getDay() == 1 || d.getDay() == 2) {
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
}