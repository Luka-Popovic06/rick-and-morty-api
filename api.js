import { domElements } from './dom.js';
import { episode, character, location } from './input.js';
export const fetchRickAndMortyData = async (number, type) => {
  try {
    for (let i = 0; i < number; i++) {
      const rickAndMortyData = await fetch(
        `https://rickandmortyapi.com/api/${type}/?page=${i}`
      );
      const list = await rickAndMortyData.json();
      const { results } = list;
      const names = results.map(n => n.name);
      names.forEach(element => {
        createListItem(element);
      });
      console.log(list);
    }
  } catch (error) {
    console.log(error);
  }
};
