import luneImg from './img/lune.jpg';
import phobosImg from './img/phobos.jpg';
import deimosImg from './img/deimos.jpg';
import ioImg from './img/io.jpg';
import europaImg from './img/europa.jpg';
import ganymedeImg from './img/ganymede.jpg';
import callistoImg from './img/callisto.jpg';

const satelitesData = [
  { 
    id: 'lune', 
    name: 'La Lune', 
    description: {
      intro: 'Le satellite naturel de la Terre.',
      characteristics: 'La Lune est une petite planète rocheuse, avec des cratères et des mers lunaires constituées de basalte.',
      exploration: 'La Lune a été explorée par les missions Apollo, et le premier homme a marché sur sa surface en 1969.',
      interestingFact: 'La Lune est en rotation synchrone avec la Terre, ce qui fait qu’elle montre toujours la même face à notre planète.'
    },
    image: luneImg,
    url: 'https://fr.wikipedia.org/wiki/Lune'
  },
  { 
    id: 'phobos', 
    name: 'Phobos', 
    description: {
      intro: 'Le plus grand satellite de Mars.',
      characteristics: 'Phobos est une petite lune irrégulière, composée de roches et de glace, qui orbite très près de Mars.',
      exploration: 'Phobos a été observé par plusieurs sondes spatiales, notamment Mars Express et Mars Reconnaissance Orbiter.',
      interestingFact: 'Phobos se rapproche de plus en plus de Mars chaque année et pourrait finir par s’écraser sur la planète dans environ 30 à 50 millions d’années.'
    },
    image: phobosImg,
    url: 'https://fr.wikipedia.org/wiki/Phobos_(lune)'
  },
  { 
    id: 'deimos', 
    name: 'Deimos', 
    description: {
      intro: 'Le plus petit satellite de Mars.',
      characteristics: 'Deimos est une lune rocheuse de petite taille et de forme irrégulière.',
      exploration: 'Deimos a été observé par les sondes Mars Odyssey et Mars Express.',
      interestingFact: 'Deimos orbite lentement autour de Mars, et sa faible gravité fait que des objets peuvent s’échapper de sa surface facilement.'
    },
    image: deimosImg,
    url: 'https://fr.wikipedia.org/wiki/Deimos_(lune)'
  },
  { 
    id: 'io', 
    name: 'Io', 
    description: {
      intro: 'Un satellite volcanique de Jupiter.',
      characteristics: 'Io est le satellite le plus volcanique du système solaire, avec plus de 400 volcans actifs.',
      exploration: 'Io a été exploré par les sondes Voyager et Galileo.',
      interestingFact: 'La chaleur interne de Io provient de la friction causée par les forces gravitationnelles exercées par Jupiter et ses autres lunes.'
    },
    image: ioImg,
    url: 'https://fr.wikipedia.org/wiki/Io_(lune)'
  },
  { 
    id: 'europa', 
    name: 'Europe', 
    description: {
      intro: 'Une lune glacée de Jupiter.',
      characteristics: 'Europa est recouverte d’une croûte glacée et pourrait abriter un océan d’eau liquide sous sa surface.',
      exploration: 'Europa a été explorée par les sondes Voyager et Galileo, et des missions futures comme Europa Clipper de la NASA sont prévues.',
      interestingFact: 'Europa pourrait offrir des conditions propices à la vie, en raison de son océan sous-glaciaire et de sa chaleur géothermique.'
    },
    image: europaImg,
    url: 'https://fr.wikipedia.org/wiki/Europe_(lune)'
  },
  { 
    id: 'ganymede', 
    name: 'Ganymede', 
    description: {
      intro: 'Le plus grand satellite de Jupiter et du système solaire.',
      characteristics: 'Ganymede est une lune glacée avec un noyau métallique, et c’est la seule lune du système solaire à avoir un champ magnétique.',
      exploration: 'Ganymede a été exploré par les sondes Voyager et Galileo.',
      interestingFact: 'Ganymede est plus grand que la planète Mercure et possède une surface faite de roches et de glaces.'
    },
    image: ganymedeImg,
    url: 'https://fr.wikipedia.org/wiki/Ganym%C3%A8de_(lune)'
  },
  { 
    id: 'callisto', 
    name: 'Callisto', 
    description: {
      intro: 'Un satellite de Jupiter.',
      characteristics: 'Callisto est une lune glacée avec une surface très ancienne, parsemée de cratères.',
      exploration: 'Callisto a été observé par les sondes Voyager et Galileo.',
      interestingFact: 'Callisto est l’un des corps les plus anciens et les plus cratérisés du système solaire, offrant une fenêtre sur les premiers temps du système solaire.'
    },
    image: callistoImg,
    url: 'https://fr.wikipedia.org/wiki/Callisto_(lune)'
  }
];

export default satelitesData;
