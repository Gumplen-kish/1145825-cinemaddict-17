import {FILM_TEXT, MESSAGE_EMOJI, FORENAME, SURNAME} from '../data/message-data.js';
import {getRandom} from '../random.js';

const generateForenameSuname = () => `${FORENAME[getRandom(0, FORENAME.length - 1)]} ${FORENAME[getRandom(0, SURNAME.length - 1)]}`;
const generateRandomTimeMessage = () => `${getRandom(0,23)}:${getRandom(0,5)}:${getRandom(0,59)}`;
const generateMessageText = () => `${FILM_TEXT.split('.',getRandom(1,5)).join('. ')}`;

const generateMessage = () => ({
  text: generateMessageText(),
  emotion: MESSAGE_EMOJI[getRandom(0, MESSAGE_EMOJI.length - 1)],
  author: generateForenameSuname(),
  date: `2022/03/20 ${generateRandomTimeMessage()}`,
});

export {generateMessage, generateForenameSuname};
