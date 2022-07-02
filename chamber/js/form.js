// Responsive Membership level

const np = document.querySelector('#np');
const pricenp = document.querySelector('#pricenp');

np.addEventListener('click', () => {pricenp.classList.toggle('special')}, false);

const bronze = document.querySelector('#bronze');
const pricebronze = document.querySelector('#pricebronze');

bronze.addEventListener('click', () => {pricebronze.classList.toggle('special')}, false);

const silver = document.querySelector('#silver');
const pricesilver = document.querySelector('#pricesilver');

silver.addEventListener('click', () => {pricesilver.classList.toggle('special')}, false);

const gold = document.querySelector('#gold');
const pricegold = document.querySelector('#pricegold');

gold.addEventListener('click', () => {pricegold.classList.toggle('special')}, false);

const rightnow = Date.now();
document.querySelector("#submissionDate").value = rightnow;