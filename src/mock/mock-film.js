import {getRandom} from '../random.js';
import {srcPoster, filmTitles, filmGenres} from '../data/film-data';
import {FilmText, Forename, Surname} from '../data/message-data.js';
import {generateForenameSuname} from '../mock/mock-comment.js';

const generateFilmDescription = () => {
  const filmDescription = FilmText.split('. ', getRandom(1, 5)).join('. ');
  if (filmDescription.length > 140) {
    return `${filmDescription.substring(0,139)  }...`;
  }
  return `${filmDescription}.`;
};

const generateCardFilm = () => {
  const filmID = getRandom(0, srcPoster.length - 1);
  return {
    poster: `./images/posters/${srcPoster[filmID]}`,
    title: filmTitles[filmID],
    originalTitle: filmTitles[filmID],
    rating: `${getRandom(1, 9)}.${getRandom(1, 9)}`,
    director: `${generateForenameSuname(Forename, Surname)}`,
    screenwriter: 'Screenwriter\'s name',
    actors: ['Actor 1', 'Actor 2', 'Actor 3'],
    yearRelease: getRandom(1980, 1999),
    duration: `${getRandom(1, 3)}h ${getRandom(0, 59)}m`,
    genre: filmGenres[filmID],
    description: generateFilmDescription(),
    countMessage: `${getRandom(0, 24)} comments`,
  };
};

export {generateCardFilm};
