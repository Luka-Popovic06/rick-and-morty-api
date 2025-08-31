import { domElements } from './dom.js';
export let character;
export let location;
export let episode;
domElements.searchCharacters.addEventListener('input', function (e) {
  character = e.target.value.toLowerCase();
});
domElements.searchEpisodes.addEventListener('input', function (e) {
  episode = e.target.value.toLowerCase();
});
domElements.searchLocations.addEventListener('input', function (e) {
  location = e.target.value.toLowerCase();
});
