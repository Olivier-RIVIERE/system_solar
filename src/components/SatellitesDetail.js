import React from 'react'
import { useParams } from 'react-router-dom';
import satelitesData from '../assets/satelitesData'

const SatellitesDetail = () => {
  const { sateliteId } = useParams();
  const satelite = satelitesData.find((satelite) => satelite.id === sateliteId);

  if (!satelite) {
    return <h2>Satellite non trouvée</h2>;
  }
  return (
    <div className='container'>
      <h2>{satelite.name}</h2>
      <img src={satelite.image} alt={satelite.name} />
      <p><strong>Introduction:</strong> {satelite.description.intro}</p>
      <p><strong>Caractéristiques:</strong> {satelite.description.characteristics}</p>
      <p><strong>Exploration:</strong> {satelite.description.exploration}</p>
      <p><strong>Fait intéressant:</strong> {satelite.description.interestingFact}</p>
      <a href={satelite.url} target='_blank' rel='noopener noreferrer'>En savoir plus...</a>
    </div>
  )
}

export default SatellitesDetail
