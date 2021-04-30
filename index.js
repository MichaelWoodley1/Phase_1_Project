const button = document.getElementById('button');



button.addEventListener("click", grabJoke);

function grabJoke(){
    const jokeText = fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}