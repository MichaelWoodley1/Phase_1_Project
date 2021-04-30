const button = document.getElementById("myBtn");

button.addEventListener("click", grabJoke);

function grabJoke(){
    const jokeRequest = fetch('https://icanhazdadjoke.com/', {
        headers: {
            //'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())
        .then(obj => jokeBody.innerHTML = obj.joke)
    
}











// Access to fetch at 'https://icanhazdadjoke.com/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy:
// Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
// index.js:4 GET https://icanhazdadjoke.com/ net::ERR_FAILED
// grabJoke @ index.js:4
// index.html:1 Uncaught (in promise) TypeError: Failed to fetch