'use strict';
import { domElements } from './dom.js';
import { fetchRickAndMortyData, getCharacter } from './api.js';
import { episode, character, location } from './input.js';
domElements.main.addEventListener('click', function (e) {
  if (e.target.closest('.episodes-btn')) {
    domElements.btnEpisodes.disabled = true;
    domElements.btnLocations.disabled = false;
    domElements.btnCharacters.disabled = false;
    domElements.list.innerHTML = '';
    domElements.searchEpisodes.classList.toggle('transparent');
    domElements.searchLocations.classList.add('transparent');
    domElements.searchCharacters.classList.add('transparent');
    fetchRickAndMortyData(3, 'episode');
  } else if (e.target.closest('.characters-btn')) {
    domElements.btnCharacters.disabled = true;
    domElements.btnEpisodes.disabled = false;
    domElements.btnLocations.disabled = false;
    domElements.list.innerHTML = '';
    domElements.searchCharacters.classList.toggle('transparent');
    domElements.searchEpisodes.classList.add('transparent');
    domElements.searchLocations.classList.add('transparent');
    fetchRickAndMortyData(43, 'character');
  } else if (e.target.closest('.locations-btn')) {
    domElements.btnLocations.disabled = true;
    domElements.btnCharacters.disabled = false;
    domElements.btnEpisodes.disabled = false;
    domElements.list.innerHTML = '';
    domElements.searchCharacters.classList.add('transparent');
    domElements.searchEpisodes.classList.add('transparent');
    domElements.searchLocations.classList.toggle('transparent');
    fetchRickAndMortyData(8, 'location');
  }
});
