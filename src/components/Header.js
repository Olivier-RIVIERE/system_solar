import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Header = () => {
  const [planetsActive, setPlanetsActive] = useState(false);
  const [satellitesActive, setSatellitesActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePlanetsClick = () => {
    setPlanetsActive(!planetsActive);
  };

  const handleSatellitesClick = () => {
    setSatellitesActive(!satellitesActive);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setPlanetsActive(false);
    setSatellitesActive(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <h1>Le système solaire</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faClose : faBars } />
      </div>
      <nav className={isMenuOpen ? 'menu activate' : 'menu'}>
        <ul className="menu">
          <li className="accueil">
            <Link to="/" onClick={handleLinkClick}>Accueil</Link>
          </li>
          <li className="submenu">
            Les planètes
            <FontAwesomeIcon
              onClick={handlePlanetsClick}
              icon={planetsActive ? faAngleUp : faAngleDown}
              aria-expanded={planetsActive}
              className="icon"
            />
            <ul className={planetsActive ? 'active' : 'none'}>
              <li><Link to="/planets/mars" onClick={handleLinkClick}>Mars</Link></li>
              <li><Link to="/planets/jupiter" onClick={handleLinkClick}>Jupiter</Link></li>
              <li><Link to="/planets/saturne"  onClick={handleLinkClick}>Saturne</Link></li>
              <li><Link to="/planets/uranus" onClick={handleLinkClick}>Uranus</Link></li>
              <li><Link to="/planets/neptune" onClick={handleLinkClick}>Neptune</Link></li>
              <li><Link to="/planets/mercure" onClick={handleLinkClick}>Mercure</Link></li>
              <li><Link to="/planets/venus" onClick={handleLinkClick}>Venus</Link></li>
              <li><Link to="/planets/terre" onClick={handleLinkClick}>La Terre</Link></li>
            </ul>
          </li>
          <li className="submenu">
            Les Satellites
            <FontAwesomeIcon
              onClick={handleSatellitesClick}
              icon={satellitesActive ? faAngleUp : faAngleDown}
              aria-expanded={satellitesActive}
              className="icon"
            />
            <ul className={satellitesActive ? 'active success' : 'none'}>
              <li><Link to="/satellites/lune" onClick={handleLinkClick}>La Lune</Link></li>
              <li><Link to="/satellites/phobos" onClick={handleLinkClick}>Phobos</Link></li>
              <li><Link to="/satellites/deimos" onClick={handleLinkClick}>Deimos</Link></li>
              <li><Link to="/satellites/io" onClick={handleLinkClick}>Io</Link></li>
              <li><Link to="/satellites/europa" onClick={handleLinkClick}>Europa</Link></li>
              <li><Link to="/satellites/ganymede" onClick={handleLinkClick}>Ganymede</Link></li>
              <li><Link to="/satellites/callisto" onClick={handleLinkClick}>Callisto</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
