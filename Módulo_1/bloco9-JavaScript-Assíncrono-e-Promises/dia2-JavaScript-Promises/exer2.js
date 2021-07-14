// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response1 => response1.json())
    .then(response => {
      teste(response)
    });    

};
const teste = (response) => {
  let cri = document.querySelector('#jokeContainer')
  cri.innerHTML = response.joke
}

window.onload = () => fetchJoke();