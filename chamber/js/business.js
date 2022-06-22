const gridView = document.querySelector('#grid-view');
const listView = document.querySelector('#list-view');
const display = document.querySelector('.cards')

gridView.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("lists");
});

listView.addEventListener("click", () => {
    display.classList.add("lists");
    display.classList.remove("cards");
});