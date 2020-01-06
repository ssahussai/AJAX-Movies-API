/*-- constants --*/
const BASE_URL = 'http://www.omdbapi.com/?apikey=7de57161&s=';

/* app's state variable */
let currentView, movies; 

/* event listener */


/*-- cached elements --*/
const indexViewEl = document.getElementById('index-view');
const listContainerEl = document.querySelector('#index-view section');

/* function */
init()

async function init() {
  currentView = 'index';
  movies = await fetch(BASE_URL).then(res => res.json());
  render();
}


function render() {
}

