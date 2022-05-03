import {generateCardFilm} from '../mock/mock-film.js';

export default class CardFilmModel {
  filmCards = Array.from({length: 5}, generateCardFilm);
  getFilmCards = () => this.filmCards;
}
