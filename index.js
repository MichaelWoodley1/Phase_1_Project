const jokeLikes = {};
let currentJokeId = "";
const laughButton = document.getElementById("laughButton");

const grabJoke = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      //'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then((obj) => {
      currentJokeId = obj.id;

      document.getElementById("jokeContainer").innerHTML = obj.joke;
      document.getElementById("jokeLikeCounter").innerHTML = `<br/>Number of likes: ${jokeLikes[currentJokeId] | 0}`;
    })
    .catch((error) => {
      alert("Error");
      console.log(error.message);
    })
};

const likeJoke = (event) => {
  jokeLikes[currentJokeId] = jokeLikes[currentJokeId] ? (jokeLikes[currentJokeId] + 1) : 1;
  document.getElementById("jokeLikeCounter").innerHTML = `<br/>Number of likes: ${jokeLikes[currentJokeId] | 0}`;
}

document.addEventListener('DOMContentLoaded', grabJoke);
const button = document.getElementById("likeButton");
button.addEventListener("click", likeJoke);
laughButton.addEventListener("click", grabJoke);

// Access to fetch at 'https://icanhazdadjoke.com/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy:
// Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
// index.js:4 GET https://icanhazdadjoke.com/ net::ERR_FAILED
// grabJoke @ index.js:4
// index.html:1 Uncaught (in promise) TypeError: Failed to fetch