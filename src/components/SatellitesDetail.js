import React from 'react'
import { useParams } from 'react-router-dom';
import satellitesData from '../assets/satellitesData'

const SatellitesDetail = () => {
  const { satelliteId } = useParams();
  const satellite = satellitesData.find((s) => s.id === satelliteId);

  if (!satellite) {
    return (
      <div className="container" style={{ paddingTop: '10rem' }}>
        <h2 style={{ display: 'block' }}>Satellite introuvable</h2>
      </div>
    );
  }

  return (
    <>
      {/* Hero plein écran */}
      <div className="container-hero">
        <img src={satellite.image} alt={satellite.name} loading="eager" />
        <div className="container-hero__overlay" aria-hidden="true"></div>
        <div className="container-hero__title">
          <span className="planet-tag">Système solaire — Satellite naturel</span>
          <h2>{satellite.name}</h2>
        </div>
      </div>

      {/* Corps de la page */}
      <div className="container">
        <div className="planet-block">
          <strong>Introduction</strong>
          <p>{satellite.description.intro}</p>
        </div>
        <div className="planet-block">
          <strong>Caractéristiques</strong>
          <p>{satellite.description.characteristics}</p>
        </div>
        <div className="planet-block">
          <strong>Exploration</strong>
          <p>{satellite.description.exploration}</p>
        </div>
        <div className="planet-block">
          <strong>Fait intéressant</strong>
          <p>{satellite.description.interestingFact}</p>
        </div>
        <a href={satellite.url} target="_blank" rel="noopener noreferrer">
          En savoir plus →
        </a>
      </div>
    </>
  );
};

export default SatellitesDetail;
