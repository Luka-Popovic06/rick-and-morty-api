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
