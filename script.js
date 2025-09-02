'use strict';
import { domElements } from './dom.js';
import {
  fetchRickAndMortyData,
  getCharacter,
  getLocation,
  getEpisode,
} from './api.js';
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
  } else if (e.target.closest('.list-item')) {
    const list = e.target.closest('.list-item');
    if (domElements.btnEpisodes.disabled === true) {
      getEpisode(list.dataset.name);
    } else if (domElements.btnLocations.disabled === true) {
      getLocation(list.dataset.name);
    } else if (domElements.btnCharacters.disabled === true) {
      getCharacter(list.dataset.name);
      console.log(list.dataset.name);
    }
    domElements.infoBox.classList.remove('hidden');
    domElements.overlay.classList.remove('hidden');
  }
});
domElements.overlay.addEventListener('click', function (e) {
  domElements.infoBox.classList.add('hidden');
  domElements.overlay.classList.add('hidden');
  domElements.infoBox.innerHTML = '';
  domElements.searchCharacters.value = '';
  domElements.searchEpisodes.value = '';
  domElements.searchLocations.value = '';
});
