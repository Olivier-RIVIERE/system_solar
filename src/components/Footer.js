import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 800);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <div className="footer-top">
        <span className="footer-brand">Système solaire</span>
        <div className="footer-meta">
          <p>Images NASA</p>
          <p>Créé par Olivier Rivière</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copyright">&copy; {new Date().getFullYear()} — Tous droits réservés</span>
      </div>
      {isVisible && (
        <FontAwesomeIcon
          onClick={scrollToTop}
          icon={faCircleUp}
          className="scroll-to-top-icon visible"
          aria-label="Retour en haut"
        />
      )}
    </footer>
  );
};

export default Footer;
