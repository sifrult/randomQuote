import { quotes } from './quotes.js';
import { backgrounds } from './backgrounds.js';

const excerpt = document.getElementById('excerpt');
const composer = document.getElementById('composer');
const photoContainer = document.getElementById('photo');
const regenerate = document.getElementById('regenerate');
const container = document.getElementById('container');

let shuffledQ = shuffle(quotes);
let quoteIndex = 0;
let speechSynthesisInstance = window.speechSynthesis;

// Shuffles the array on page refresh
function shuffle(array) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function newQuote() {
    const newQ = shuffledQ[quoteIndex];

    // Changes/appends HTML
    excerpt.innerText = newQ.quote;
    composer.innerText = newQ.author;
    const imgElement = document.createElement('img');
    imgElement.src = newQ.img;
    photoContainer.innerHTML = '';
    photoContainer.appendChild(imgElement);

    // Goes through all the quotes once
    quoteIndex = (quoteIndex + 1) % shuffledQ.length;

    // Change background image
    document.body.style.backgroundImage = `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`;

    // Change background color of quote
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    container.style.backgroundColor = `rgb(${r}, ${g}, ${b}, .8)`;

    // Interrupt current speech and start new speech
    interruptSpeech();
    speak(newQ.quote);
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesisInstance.speak(utterance);
}

function interruptSpeech() {
    if (speechSynthesisInstance.speaking) {
        speechSynthesisInstance.cancel();
    }
}

regenerate.addEventListener('click', newQuote);
window.addEventListener('load', newQuote);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        newQuote();
    }
});
