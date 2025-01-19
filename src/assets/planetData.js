import terreImg from './img/terre.jpg'
import venusImg from './img/venus.jpg'
import mercureImg from './img/mercure.jpg'
import neptuneImg from './img/neptune.jpg'
import uranusImg from './img/uranus.jpg'
import saturneImg from './img/saturn.jpg'
import jupiterImg from './img/jupiter.jpg'
import marsImg from './img/mars.jpg'


const planetData = [
  { 
    id: 'mars', 
    name: 'Mars', 
    description: {
      intro: 'La planète la plus proche du Soleil.',
      characteristics: 'Mars est une planète rocheuse avec des températures très froides.',
      exploration: 'Elle a été explorée par plusieurs rovers, dont Perseverance en 2020.',
      interestingFact: 'Mars a des volcans géants, comme Olympus Mons, le plus grand volcan du système solaire.'
    },
    image: marsImg,
    url: 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)'
  },
  { 
    id: 'jupiter', 
    name: 'Jupiter', 
    description: {
      intro: 'La plus grosse planète du système solaire.',
      characteristics: 'Jupiter est une géante gazeuse avec une composition principalement d’hydrogène et d’hélium.',
      exploration: 'Elle a été visitée par la sonde Juno, qui étudie son atmosphère.',
      interestingFact: 'Jupiter possède la Grande Tache Rouge, une tempête géante qui dure depuis des siècles.'
    },
    image: jupiterImg,
    url: 'https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)'
  },
  { 
    id: 'saturne', 
    name: 'Saturne', 
    description: {
      intro: 'Une autre géante gazeuse célèbre pour ses anneaux spectaculaires.',
      characteristics: 'Saturne est la deuxième plus grande planète du système solaire et est principalement composée de gaz.',
      exploration: 'La sonde Cassini a étudié Saturne et ses lunes pendant plus de 13 ans.',
      interestingFact: 'Les anneaux de Saturne sont faits de morceaux de glace et de roches, allant de la poussière aux blocs de plusieurs mètres.'
    },
    image: saturneImg,
    url: 'https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)'
  },
  { 
    id: 'uranus', 
    name: 'Uranus', 
    description: {
      intro: 'Une planète glacée située au-delà de Saturne.',
      characteristics: 'Uranus est une géante de glace avec des atmosphères de méthane, d’ammoniac et de vapeur d’eau.',
      exploration: 'La sonde Voyager 2 a effectué un survol d’Uranus en 1986, offrant les premières images détaillées de la planète.',
      interestingFact: 'Uranus tourne sur le côté par rapport à son orbite, probablement à cause d’une collision avec un autre corps céleste.'
    },
    image: uranusImg,
    url: 'https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)'
  },
  { 
    id: 'neptune', 
    name: 'Neptune', 
    description: {
      intro: 'La huitième et dernière planète du système solaire.',
      characteristics: 'Neptune est une géante de glace avec des vents extrêmement forts qui soufflent à plus de 2000 km/h.',
      exploration: 'La sonde Voyager 2 est la seule à avoir survolé Neptune en 1989.',
      interestingFact: 'Neptune possède des tempêtes, dont la plus grande, la Grande Tache Sombre, est aussi grande que la Terre.'
    },
    image: neptuneImg,
    url: 'https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)'
  },
  { 
    id: 'mercure', 
    name: 'Mercure', 
    description: {
      intro: 'La planète la plus proche du Soleil.',
      characteristics: 'Mercure est une petite planète rocheuse avec une surface extrêmement chaude du côté du Soleil et glacée de l’autre côté.',
      exploration: 'La sonde MESSENGER a exploré Mercure de 2011 à 2015.',
      interestingFact: 'Mercure a une rotation très lente et une journée sur Mercure dure 176 jours terrestres.'
    },
    image: mercureImg, 
    url: 'https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)'
  },
  { 
    id: 'venus', 
    name: 'Vénus', 
    description: {
      intro: 'La deuxième planète la plus proche du Soleil, souvent appelée la sœur jumelle de la Terre.',
      characteristics: 'Vénus est une planète rocheuse avec une atmosphère dense composée de dioxyde de carbone, rendant sa température extrêmement élevée.',
      exploration: 'Vénus a été explorée par de nombreuses missions, dont la célèbre sonde soviétique Venera.',
      interestingFact: 'Vénus tourne dans le sens inverse de la plupart des autres planètes, avec une rotation rétrograde.'
    },
    image: venusImg,
    url: 'https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)'
  },
  { 
    id: 'terre', 
    name: 'La Terre', 
    description: {
      intro: 'Notre planète, la seule connue à ce jour abritant la vie.',
      characteristics: 'La Terre est une planète rocheuse, riche en eau liquide et en une atmosphère propice à la vie.',
      exploration: 'L’Homme a exploré la Terre depuis des milliers d’années, et a envoyé des sondes dans l’espace pour observer d’autres planètes.',
      interestingFact: 'La Terre est la seule planète du système solaire connue pour avoir de la vie, grâce à son atmosphère et ses océans.'
    },
    image: terreImg,
    url: 'https://fr.wikipedia.org/wiki/Terre'
  }
];

export default planetData;
