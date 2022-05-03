import {getRandom} from '../random.js';
import {SRC_POSTER, FILM_TITLE, FILM_GENRE} from '../data/film-data.js';
import {FILM_TEXT, FORENAME, SURNAME} from '../data/message-data.js';
import {generateForenameSuname} from '../mock/mock-comment.js';

const generateFilmDescription = () => {
  const filmDescription = FILM_TEXT.split('. ', getRandom(1, 5)).join('. ');
  if (filmDescription.length > 140) {
    return `${filmDescription.substring(0,139)  }...`;
  }
  return `${filmDescription}.`;
};

const generateCardFilm = () => {
  const FILM_ID = getRandom(0, SRC_POSTER.length - 1);
  return {
    poster: `./images/posters/${SRC_POSTER[FILM_ID]}`,
    title: FILM_TITLE[FILM_ID],
    titleOriginal: FILM_TITLE[FILM_ID],
    rating: `${getRandom(1, 9)}.${getRandom(1, 9)}`,
    director: `${generateForenameSuname(FORENAME, SURNAME)}`,
    screenwriter: 'Screenwriter\'s name',
    actors: ['Actor 1', 'Actor 2', 'Actor 3'],
    yearRelease: getRandom(1980, 1999),
    duration: `${getRandom(1, 3)}h ${getRandom(0, 59)}m`,
    genre: FILM_GENRE[FILM_ID],
    description: `${generateFilmDescription()}`,
    countMessage: `${getRandom(0, 24)} comments`,
  };
};

export {generateCardFilm};
