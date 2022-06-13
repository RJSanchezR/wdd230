// For the Banner that shows on Mondays and Tuesdays

const banner = document.querySelector(".banner");
const d = new Date();
const socials = document.querySelector(".socials")
// let day = d.getDay();

if (d.getDay() == 1 || d.getDay() == 2) {
    banner.style.display = "block";
	console.log('block')
    socials.classList.toggle('socials-index')
}
else {
    banner.style.display = "none";
	console.log('none')
}