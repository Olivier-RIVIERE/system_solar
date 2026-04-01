import React from 'react'
import { useParams } from 'react-router-dom';
import planetData from '../assets/planetData'

const PlanetDetail = () => {
  const { planetId } = useParams();
  const planet = planetData.find((planet) => planet.id === planetId);

  if (!planet) {
    return (
      <div className="container" style={{ paddingTop: '10rem' }}>
        <h2 style={{ display: 'block' }}>Planète introuvable</h2>
      </div>
    );
  }

  return (
    <>
      {/* Hero plein écran avec l'image de la planète */}
      <div className="container-hero">
        <img src={planet.image} alt={planet.name} loading="eager" />
        <div className="container-hero__overlay" aria-hidden="true"></div>
        <div className="container-hero__title">
          <span className="planet-tag">Système solaire — Planète</span>
          <h2>{planet.name}</h2>
        </div>
      </div>

      {/* Corps de la page */}
      <div className="container">
        <div className="planet-block">
          <strong>Introduction</strong>
          <p>{planet.description.intro}</p>
        </div>
        <div className="planet-block">
          <strong>Caractéristiques</strong>
          <p>{planet.description.characteristics}</p>
        </div>
        <div className="planet-block">
          <strong>Exploration</strong>
          <p>{planet.description.exploration}</p>
        </div>
        <div className="planet-block">
          <strong>Fait intéressant</strong>
          <p>{planet.description.interestingFact}</p>
        </div>
        <a href={planet.url} target="_blank" rel="noopener noreferrer">
          En savoir plus →
        </a>
      </div>
    </>
  );
};

export default PlanetDetail;
