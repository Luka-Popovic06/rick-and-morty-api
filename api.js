import { domElements } from './dom.js';

export const fetchRickAndMortyData = async (number, type) => {
  try {
    for (let i = 0; i < number; i++) {
      const rickAndMortyData = await fetch(
        `https://rickandmortyapi.com/api/${type}/?page=${i}`
      );
      const list = await rickAndMortyData.json();
      const { results } = list;
      const names = results.map(n => n.name);
      console.log(names);
      names.forEach(element => {
        createListItem(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const createListItem = name => {
  const html = `<li class="list-item" data-name="${name}">${name}</li>`;
  domElements.list.insertAdjacentHTML('beforeend', html);
};
export const getCharacter = async characterName => {
  try {
    const characterData = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    );
    const character = await characterData.json();
    const { results } = character;
    results.forEach(result => {
      const { id, name, status, species, type, image } = result;
      createCaracterInf(image, name, species, type, id, status);
    });
  } catch (error) {
    console.log(error);
  }
};
export const getLocation = async locationName => {
  try {
    const locationData = await fetch(
      `https://rickandmortyapi.com/api/location/?name=${locationName}`
    );
    const location = await locationData.json();
    const { results } = location;
    results.forEach(result => {
      const { name, dimension, type, id } = result;
      createLocationInfo(name, dimension, type, id);
    });
  } catch (error) {
    console.log(error);
  }
};
export const getEpisode = async episodeName => {
  try {
    const episodesData = await fetch(
      `https://rickandmortyapi.com/api/episode/?name=${episodeName}`
    );
    const episodes = await episodesData.json();
    const { results } = episodes;
    console.log(results);
    results.forEach(selectedEpisode => {
      const { name, air_date, episode, id } = selectedEpisode;
      createEpisodesInfo(name, air_date, episode, id);
    });
  } catch (error) {
    console.log(error);
  }
};
const createCaracterInf = (img, name, species, type, id, status) => {
  const html = `
  <div class="info-card_character">
      <img class="character-img" src=${img} />
      <div class="characters-info">
        <p>
          <span>Name: </span>
          <span class="character-name">${name}</span>
        </p>
        <p>
          <span>Status: </span>
          <span class="character-status">${status}</span>
        </p>
        <p>
          <span>Species: </span>
          <span class="character-species">${species}</span>
        </p>
        <p>
          <span>Type: </span>
          <span class="character-type">${type}</span>
        </p>
        <p>
          <span>ID: </span>
          <span class="character-id">${id}</span>
        </p>
      </div>
    </div>
  `;
  domElements.infoBox.insertAdjacentHTML('afterbegin', html);
};
