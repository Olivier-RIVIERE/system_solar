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
      intro:
        "Mars, surnommée la « planète rouge » à cause de l’oxyde de fer qui recouvre sa surface, est la quatrième planète du Système solaire et orbite à environ 228 millions de kilomètres du Soleil.",
      characteristics:
        "Planète tellurique d’un rayon d’environ 3 390 km (un peu plus de la moitié de la Terre) et d’une gravité ~38 % de la nôtre. Atmosphère très fine composée à 95 % de CO₂, avec des tempêtes de poussière géantes, des calottes polaires de glace d’eau et de CO₂, et des variations de température de –125 °C la nuit polaire à +20 °C en plein été équatorial.",
      exploration:
        "Depuis Mariner 4 (1965), plus de 50 missions ont visé Mars. En 2021, Perseverance collecte des échantillons pour le programme Mars Sample Return prévu fin des années 2020. L’hélicoptère Ingenuity a réalisé le premier vol motorisé sur une autre planète. Les orbiteurs actifs, comme Mars Reconnaissance Orbiter et ExoMars TGO, cartographient surface et atmosphère. Zhurong (Chine) est en hibernation depuis 2023.",
      interestingFact:
        "Olympus Mons, volcan bouclier haut de 22 km, pourrait couvrir la France entière. Mars possède aussi Valles Marineris, canyon long de 4 000 km, et deux petites lunes capturées, Phobos et Deimos."
    },
    image: marsImg,
    url: 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    description: {
      intro: "Jupiter, cinquième planète du Système solaire, est une géante gazeuse dont la masse dépasse deux fois celle de toutes les autres planètes réunies.",
      characteristics:
        "Rayon équatorial ≃ 71 500 km (11× Terre), gravité de surface ~2,5 g. Atmosphère dominée par H₂ (≈90 %) et He (≈10 %), striée de bandes nuageuses, de jets supersoniques et de tempêtes colossales. Champ magnétique immense, anneaux ténus, au moins 95 lunes confirmées dont les Galiléennes (Io, Europe, Ganymède, Callisto).",
      exploration:
        "Survols Pioneer 10-11 (1973-74) puis Voyager 1-2 (1979). L’orbiteur Galileo (1995-2003) a largué une sonde atmosphérique. Juno (2016-2025 +) analyse structure interne, pôles et survole Io, Europe et Ganymède. La mission européenne JUICE, lancée en 2023, rejoindra le système jovien en 2031 ; Europa Clipper suivra vers 2030.",
      interestingFact:
        "La Grande Tache Rouge, anticyclone large d’environ 16 000 km, dure depuis au moins 350 ans malgré un rétrécissement progressif. Jupiter rayonne plus d’énergie qu’elle n’en reçoit grâce à sa contraction gravitationnelle."
    },
    image: jupiterImg,
    url: 'https://fr.wikipedia.org/wiki/Jupiter_(planète)'
  },
  {
    id: 'saturne',
    name: 'Saturne',
    description: {
      intro:
        "Saturne, sixième planète à partir du Soleil, est la seconde géante gazeuse du Système solaire et l’astre le moins dense connu : elle flotterait dans l’eau !",
      characteristics:
        "Rayon équatorial ≃ 58 200 km (9,4 × Terre), densité 0,69 g/cm³, gravité ~1,07 g. Atmosphère ~96 % H₂ et 3 % He, coiffée de bandes nuageuses et du célèbre « hexagone » polaire. Système d’anneaux de glace et poussières, actuellement vu par la tranche lors du croisement de plan annulaire de 2025. Au moins 274 lunes confirmées, dont Titan, lune plus grande que Mercure.",
      exploration:
        "Cassini-Huygens (2004-2017) a cartographié la planète et posé la sonde Huygens sur Titan. La mission Dragonfly doit décoller en 2028 et atteindre Titan en 2034. Divers survols (Pioneer 11, Voyager 1-2, New Horizons) ont complété nos données.",
      interestingFact:
        "Les anneaux se consument lentement en « pluie d’anneaux » ; ils pourraient disparaître en quelques centaines de millions d’années, mais dès mars 2025 ils deviennent quasi invisibles depuis la Terre. "
    },
    image: saturneImg,
    url: 'https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    description: {
      intro:
        "Uranus, découverte en 1781, est une géante de glace bleu pâle – septième planète du Système solaire – dont l’axe est couché sur le plan orbital.",
      characteristics:
        "Rayon ≃ 25 360 km (4,0 × Terre), gravité 0,89 g. Atmosphère dominée par H₂/He avec ~2 % CH₄ qui lui donne sa teinte cyan. Axial tilt : 98 °, d’où des saisons de 42 ans de jour puis 42 ans de nuit par pôle. 28 lunes recensées et un système d’anneaux sombre.",
      exploration:
        "Seul Voyager 2 l’a survolée (janv. 1986). Le Flagship « Uranus Orbiter & Probe », mission phare du décadal 2023-2032, vise un lancement ~2031-2032 pour arrivée ~2044.",
      interestingFact:
        "L’inclinaison extrême s’expliquerait par un impact géant au début de l’histoire planétaire – raison probable de son noyau peu chaud et de son faible rayonnement interne."
    },
    image: uranusImg,
    url: 'https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    description: {
      intro:
        "Neptune, dernière planète connue, est une géante de glace bleu profond à la météo la plus violente du Système solaire.",
      characteristics:
        "Rayon ≃ 24 600 km (3,9 × Terre), gravité 1,14 g. Vents supersoniques dépassant 2 000 km/h et tempêtes cyclopéennes (Grandes Taches Sombres). 16 lunes identifiées, dont Triton, capturée et rétrograde.",
      exploration:
        "Voyager 2 l’a frôlée en août 1989, révélant ses anneaux discrets et plusieurs nouvelles lunes. Depuis, le télescope Hubble suit l’apparition de nouvelles taches sombres – la dernière détectée début 2025.",
      interestingFact:
        "Malgré le faible ensoleillement (30× moins que sur Terre), Neptune émet plus du double de l’énergie qu’elle reçoit, signe de chaleur interne encore mal comprise."
    },
    image: neptuneImg,
    url: 'https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)'
  },
  {
    id: 'mercure',
    name: 'Mercure',
    description: {
      intro:
        "Mercure, plus proche planète du Soleil, est un petit monde de 2 440 km de rayon dépourvu d’atmosphère épaisse.",
      characteristics:
        "Gravité 0,38 g; jour solaire de 176 jours terrestres (résonance 3:2). Températures : +430 °C à midi, –180 °C la nuit. Exosphère ténue et champ magnétique faible.",
      exploration:
        "MESSENGER a cartographié Mercure (2011-2015). BepiColombo, mission ESA-JAXA, effectue ses derniers survols et entrera en orbite autour de Mercure fin 2025.",
      interestingFact:
        "Des dépôts d’eau glacée et de composés organiques subsistent dans les cratères polaires perpétuellement à l’ombre."
    },
    image: mercureImg,
    url: 'https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)'
  },
  {
    id: 'venus',
    name: 'Vénus',
    description: {
      intro:
        "Vénus, « étoile du berger », est la planète sœur de la Terre par la taille, mais un enfer thermique et acide à la surface.",
      characteristics:
        "Rayon 6 052 km, gravité 0,91 g. Atmosphère à 96 % CO₂ ; pression 92 bar ; surface ~465 °C. Rotation rétrograde très lente : 243 jours terrestres, plus longue que son année (224,7 jours).",
      exploration:
        "Les sondes soviétiques Venera furent les premières à se poser. Bientôt : NASA DAVINCI, VERITAS et ESA EnVision (lancements début 2030).",
      interestingFact:
        "À ~55 km d’altitude, température et pression deviennent « terrestres » : des micro-organismes aérobiens y sont parfois évoqués comme hypothèse de vie.",
    },
    image: venusImg,
    url: 'https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)'
  },
  {
    id: 'terre',
    name: 'La Terre',
    description: {
      intro:
        "La Terre est la troisième planète et la seule où la vie est confirmée, grâce à une eau liquide abondante et une atmosphère protectrice.",
      characteristics:
        "Rayon moyen 6 371 km, gravité 1 g, atmosphère ~78 % N₂, 21 % O₂, 1 % Ar/CO₂. Plaques tectoniques, champ magnétique puissant et cycles climatiques régulés par l’océan.",
      exploration:
        "Depuis 1957, plus de 10 000 satellites ont été lancés pour observer notre planète et l’Univers. Les sondes Voyager, New Horizons et consorts représentent l’exploration indirecte de la Terre dans l’espace lointain.",
      interestingFact:
        "La tectonique des plaques recycle le carbone et stabilise la température sur des échelles de millions d’années – un mécanisme unique parmi les planètes connues."
    },
    image: terreImg,
    url: 'https://fr.wikipedia.org/wiki/Terre'
  }
];

export default planetData;
