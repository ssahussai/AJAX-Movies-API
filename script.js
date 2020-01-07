/*-- constants --*/
const BASE_URL = 'http://www.omdbapi.com/?apikey=7de57161&s=batman'; 

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
    console.log(movies);
    indexViewEl.style.display = currentView === 'index' ? 'block' : 'none';
    if (currentView === 'index') {
        let result = movies.Search.reduce((result, m) => result +
            `<div>${m.Title} (${m.Year})</div>`, '');
        listContainerEl.innerHTML = result;
      } else if (currentView === 'create') {
        // TODO
      }
}

