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

// For the Banner that shows on Mondays and Tuesdays

const banner = document.querySelector(".banner");
const d = new Date();
// let day = d.getDay();

if (d.getDay() == 1 || d.getDay() == 2) {
    banner.style.display = "block";
	console.log('block')
}
else {
    banner.style.display = "none";
	console.log('none')
}

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
