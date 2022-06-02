const button = document.querySelector('#addbttn');
button.addEventListener('click', () => {
    const a = parseInt(document.querySelector('#num1').value);
    const b = parseInt(document.querySelector('#num2').value);
    const r = a + b;
    console.log(a + b);

    document.querySelector('#result').textContent = r;
})

const temperature = parseInt(document.querySelector('#temp').textContent);
const windspeed = parseInt(document.querySelector('#windspeed').textContent);
const windchill = document.querySelector('#windchill');

windchill.textContent = temperature + windspeed;

