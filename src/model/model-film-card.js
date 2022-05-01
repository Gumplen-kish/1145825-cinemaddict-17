import {generateCardFilm} from '../mock/mock-film.js';

export default class CardFilmModel {
  filmCardsCount = Array.from({length: 5}, generateCardFilm);
  getFilmData = () => this.FilmData;
}
