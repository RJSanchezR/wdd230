let lastVisitDate;
const now = Date.now();

if (window.localStorage.getItem('last-visit-date')) {
    lastVisitDate = window.localStorage.getItem('last-visit-date');
} else {
    lastVisitDate = now;
}

window.localStorage.setItem('last-visit-date', now);

const secondSinceLastVisit = Math.floor((now - lastVisitDate) / 1000);
const daysSinceLastVisit = Math.floor((secondSinceLastVisit / 86400)); // (60*60*24) is the seconds in a day.
document.querySelector('#seconds-ago').textContent = secondSinceLastVisit;
document.querySelector('#days-ago').textContent = daysSinceLastVisit;

console.log(secondSinceLastVisit);