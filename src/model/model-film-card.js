import {generateCardFilm} from '../mock/mock-film.js';

export default class CardFilmModel {
  #cardFilm = Array.from({length: 23}, generateCardFilm);
  get cardFilm() {
    return this.#cardFilm;
  }
}
