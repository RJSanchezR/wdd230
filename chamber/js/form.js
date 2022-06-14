const formData = new FormData(document.querySelector('form'));

function sendDate() {
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    document.getElementById("submissionDate").value = Date.now();
}


// document.querySelector('form').addEventListener('submit', (e) => {
//     const formData = new FormData(e.target);
//     // Now you can use formData.get('foo'), for example.
//     // Don't forget e.preventDefault() if you want to stop normal form .submission
// });

