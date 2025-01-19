import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };
  
    handleScroll(); // Vérifie l'état initial
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <p><em>Image gracieusement fournie par NASA</em></p>
      <p>Site créé par <strong>Olivier RIVIERE</strong></p>
      <p>&copy; 2025 - Tous droits réservés</p>
      {isVisible && (
        <FontAwesomeIcon
          onClick={scrollToTop}
          icon={faCircleUp}
          className={`scroll-to-top-icon ${isVisible ? 'visible' : ''}`}
        />
      )}
    </footer>
  );
};

export default Footer;
