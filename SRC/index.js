// script.js
function navigate(route) {
    fetch(route)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}