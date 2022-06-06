let lastVisitDate;
const ahora = Date.now();

if (window.localStorage.getItem('last-visit-date'))
{
    lastVisitDate = window.localStorage.getItem('last-visit-date');
} else {
    lastVisitDate = ahora;
}

window.localStorage.setItem('last-visit-date', ahora);

const secondSinceLastVisit = Math.floor((ahora - lastVisitDate) / 1000);
const daysSinceLastVisit = Math.floor((secondSinceLastVisit / 86400)); // (60*60*24) is the seconds in a day.
document.querySelector('#seconds-ago').textContent = secondSinceLastVisit;
document.querySelector('#days-ago').textContent = daysSinceLastVisit;

console.log(secondSinceLastVisit);
