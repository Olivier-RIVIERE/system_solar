import React from 'react'
import { useParams } from 'react-router-dom';
import planetData from '../assets/planetData'


const PlanetDetail = () => {
  const { planetId } = useParams();
  const planet = planetData.find((planet) => planet.id === planetId);

  if (!planet) {
    return <h2>Planète non trouvée</h2>;;
  }
  return (
    <div className='container'>
      <h2>{planet.name}</h2>
      <img src={planet.image} alt={planet.name} />
      <p><strong>Introduction:</strong> {planet.description.intro}</p>
      <p><strong>Caractéristiques:</strong> {planet.description.characteristics}</p>
      <p><strong>Exploration:</strong> {planet.description.exploration}</p>
      <p><strong>Fait intéressant:</strong> {planet.description.interestingFact}</p>
      <a href={planet.url} target='_blank' rel='noopener noreferrer'>En savoir plus...</a>
    </div>
  )
}

export default PlanetDetail
