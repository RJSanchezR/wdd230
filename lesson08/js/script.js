// For Last modified and current year on footer

new Date().getFullYear()

document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector("#currentYear").textContent = new Date().getFullYear();