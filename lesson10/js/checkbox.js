const checkbox = document.querySelector("input[name=checkbox]");
const display = document.querySelector(".cards");

checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        display.classList.remove("cards");
        display.classList.add("lists");
    } else {
        display.classList.add("cards");
        display.classList.remove("lists");
        console.log("Checkbox is not checked..");
    }
});