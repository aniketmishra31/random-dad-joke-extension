const url = 'https://icanhazdadjoke.com/slack';//url
fetch(url)//get request api
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    });

// function of like a dislike to call again

function get() {
    const url = 'https://icanhazdadjoke.com/slack';
    fetch(url)//get request api
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = jokeText;
        });
}
//query to access like and dislike buttons.
document.querySelector("i").addEventListener("click", () => {
    get();
});

document.querySelector(".dislike").addEventListener("click", () => {
    get();
});