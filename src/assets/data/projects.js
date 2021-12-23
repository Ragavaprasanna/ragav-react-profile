import { v4 as uuidv4 } from 'uuid';
import chatImg from '../images/chat.png';
import ROCKImg from '../images/ROCK1.png';
import foodImg from '../images/food1.jpg';
import bookImg from '../images/books.png';
import buttonImg from '../images/button.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Movie App',
    desc: 'An application to views all movies details and trailer',
    img: ROCKImg,
  },
  {
    id: uuidv4(),
    name: 'food app',
    desc: 'An app to help people to get an different type food material.',
    img: foodImg,
  },
  {
    id: uuidv4(),
    name: 'book app',
    desc: 'Using this app you can got different type author name book',
    img: bookImg,
  },
  {
    id: uuidv4(),
    name: 'css animation',
    desc: 'this project show u how can animate the button',
    img: buttonImg,
  },
  {
    id: uuidv4(),
    name: 'chat app',
    desc: 'A app use to easily communicate with people',
    img: chatImg,
  },
];

export default projects;
