import {FilmText, MessageEmoji, Forename, Surname} from '../data/message-data.js';
import {getRandom} from '../random.js';

const generateMessageAuthor = () => `${Forename[getRandom(0, Forename.length - 1)]} ${Forename[getRandom(0, Surname.length - 1)]}`;
const generateRandomTimeMessage = () => `${getRandom(0,23)}:${getRandom(0,5)}:${getRandom(0,59)}`;
const generateMessageText = () => `${FilmText.split('.',getRandom(1,5)).join('. ')}`;

const generateMessage = () => ({
  text: generateMessageText(),
  emotion: MessageEmoji[getRandom(0, MessageEmoji.length - 1)],
  author: generateMessageAuthor(),
  date: `2022/03/20 ${generateRandomTimeMessage()}`,
});

export {generateMessage};
