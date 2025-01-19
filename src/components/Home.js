import React from 'react'
import systemSolarImg from '../assets/img/solar_system.jpg'
import sunImg from '../assets/img/sun.jpg'

const Home = () => {
  return (
    <div className='home'>
      <h2>Bienvenue dans la découverte de notre système solaire</h2>
      <img src={systemSolarImg} alt="Systeme solaire" />
      <p>Le système solaire est un ensemble fascinant d'objets célestes qui gravitent autour du Soleil, une étoile située au centre de notre système. Il est constitué de huit planètes principales, dont la Terre, qui sont classées en fonction de leur proximité au Soleil : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Chacune de ces planètes possède des caractéristiques uniques, des atmosphères distinctes et des conditions de surface variées. Le système solaire abrite également des centaines de lunes, des astéroïdes, des comètes et des objets transneptuniens, comme la ceinture de Kuiper et le nuage d'Oort. Le Soleil, bien plus massif que toutes les planètes réunies, représente environ 99,86 % de la masse du système solaire. Son énergie est essentielle à la vie sur Terre, fournissant chaleur et lumière.

        Outre les planètes et leurs satellites naturels, le système solaire est également le berceau d'événements célestes spectaculaires. Les comètes, par exemple, sont de petites masses de glace et de poussière qui, lorsqu'elles se rapprochent du Soleil, développent une brillante chevelure et une queue qui peut s'étendre sur des millions de kilomètres. Les astéroïdes, eux, se trouvent principalement dans la ceinture d'astéroïdes située entre Mars et Jupiter, bien que certains puissent aussi s'approcher de la Terre. Ces objets, bien que petits comparés aux planètes, jouent un rôle clé dans la compréhension de l'origine et de l'évolution de notre système solaire.

        Le système solaire est bien plus qu'un simple ensemble de corps célestes. Il est le fruit d'une formation complexe qui a eu lieu il y a environ 4,6 milliards d'années à partir d'un nuage de gaz et de poussière. Depuis sa formation, il continue d'évoluer, avec des missions spatiales modernes, comme celles de la NASA, qui nous permettent d'explorer ses limites et de mieux comprendre ses mystères. Chaque nouvelle découverte nous rapproche de la compréhension de l'univers et de notre place au sein de ce vaste cosmos.</p>
      <h3>Le Soleil</h3>
      <img src={sunImg} alt="Soleil" />
      <p>Le Soleil, une étoile située au centre de notre système solaire, est une sphère de gaz chauds principalement composée d'hydrogène et d'hélium. Avec une température de surface d'environ 5 500°C, il génère une énergie colossale par le biais de la fusion nucléaire, un processus où l'hydrogène se transforme en hélium, libérant une immense quantité d'énergie. Cette énergie est indispensable à la vie sur Terre, car elle nourrit les processus climatiques et permet la photosynthèse, assurant ainsi la croissance des plantes et, par extension, la survie des êtres vivants. Le Soleil n'est pas une entité immobile : il effectue un mouvement rotatif autour de son axe, avec des régions proches de l'équateur qui tournent plus vite que celles près des pôles. Ce phénomène crée un champ magnétique complexe qui engendre des éruptions solaires et des vents solaires, qui ont un impact direct sur l'environnement spatial et la Terre, pouvant provoquer des perturbations dans les communications satellitaires ou même affecter les réseaux électriques.

        Le Soleil est également l'élément clé du cycle de vie des étoiles. Il se trouve dans une phase stable de sa vie, appelée la séquence principale, mais à mesure qu'il vieillit, il commencera à épuiser son hydrogène et à se transformer. Dans quelques milliards d'années, il se dilatera en une géante rouge avant de finir par expulser ses couches externes pour devenir une naine blanche. Ce processus marquera la fin de l’ère du Soleil tel que nous le connaissons, mais il laisse derrière lui une empreinte durable sur l'ensemble du système solaire. Au-delà de son rôle vital dans la création de la vie sur Terre, le Soleil nous offre une opportunité unique d'étudier les étoiles et leurs comportements, un domaine qui permet aux scientifiques de mieux comprendre l'univers dans lequel nous évoluons.</p>
    </div>
  )
}

export default Home
