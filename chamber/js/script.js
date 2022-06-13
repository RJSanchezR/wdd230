// For Last modified and current year on footer

new Date().getFullYear()

document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// For Hamburger menu for responsive page

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('responsive')}, false);

// For the Date displayed

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { 
	dateStyle: "full" 
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

// For Lazy Loading images

const imagesToLoad = document.querySelectorAll("img[data-src]")

const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
      });
}

const day = new Date();
const social = document.querySelector(".socials")
// let day = d.getDay();

if (day.getDay() == 1 || day.getDay() == 2) {
	console.log('small')
    social.classList.toggle('socials-small')
}