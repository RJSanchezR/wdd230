new Date().getFullYear()

document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector("#currentYear").textContent = new Date().getFullYear();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}