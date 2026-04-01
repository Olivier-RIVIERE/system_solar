import React, { useEffect } from 'react'
import systemSolarImg from '../assets/img/solar_system.jpg'
import sunImg from '../assets/img/sun.jpg'

const Home = () => {
  useEffect(() => {
    const etoile = document.querySelector('.etoile');

    function animateEtoile() {
      if (!etoile) return;
      const fromLeft = Math.random() > 0.5;
      const startX = fromLeft ? -50 : window.innerWidth + 50;
      const endX = fromLeft ? window.innerWidth + 50 : -50;
      const startY = Math.random() * window.innerHeight;
      const endY = startY + (Math.random() * 200 - 100);

      etoile.style.transition = 'none';
      etoile.style.left = `${startX}px`;
      etoile.style.top = `${startY}px`;
      etoile.style.opacity = 1;
      void etoile.offsetWidth;
      etoile.style.transition = 'all 2s ease-in-out';
      etoile.style.left = `${endX}px`;
      etoile.style.top = `${endY}px`;
      etoile.style.opacity = 0;
      setTimeout(animateEtoile, 2500);
    }

    animateEtoile();
  }, []);

  return (
    <>
      <div className="etoile" aria-hidden="true"></div>

      <main className="home">

        {/* ── SECTION 1 : Système solaire ── */}
        <section className="home-section">
          <img
            className="home-section__bg"
            src={systemSolarImg}
            alt=""
            aria-hidden="true"
            loading="eager"
          />
          <div className="home-section__overlay" aria-hidden="true"></div>

          <div className="home-section__content">
            <span className="section-tag">Exploration spatiale</span>
            <h2>Notre système solaire</h2>
            <p>
              Huit planètes, des centaines de lunes, des milliers d'astéroïdes&nbsp;—
              un cosmos à portée de regard.
            </p>
            <a href="#systeme" className="btn-spacex">Découvrir ↓</a>
          </div>

          <div className="scroll-hint" aria-hidden="true">
            <span style={{ fontSize: '1.2rem' }}>↓</span>
          </div>
        </section>

        {/* ── SECTION 2 : Le Soleil ── */}
        <section className="home-section" id="systeme">
          <img
            className="home-section__bg"
            src={sunImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="home-section__overlay" aria-hidden="true"></div>

          <div className="home-section__content">
            <span className="section-tag">Notre étoile</span>
            <h2>Le Soleil</h2>
            <p>
              99,86&nbsp;% de la masse du système solaire.
              Source de toute chaleur et de toute lumière sur Terre.
            </p>
          </div>
        </section>

        {/* ── PROSE : textes complets ── */}
        <div className="home-prose" id="en-savoir-plus">
          <p>
            Le système solaire est un ensemble fascinant d'objets célestes qui gravitent autour
            du Soleil. Il est constitué de huit planètes principales&nbsp;: Mercure, Vénus, Terre,
            Mars, Jupiter, Saturne, Uranus et Neptune. Chacune possède des caractéristiques uniques,
            des atmosphères distinctes et des conditions de surface variées. Le système abrite
            également des centaines de lunes, des astéroïdes, des comètes et des objets
            transneptuniens comme la ceinture de Kuiper et le nuage d'Oort.
          </p>
          <p>
            Les comètes développent une brillante chevelure lorsqu'elles s'approchent du Soleil,
            tandis que les astéroïdes, concentrés entre Mars et Jupiter, témoignent de l'origine
            de notre système vieux de 4,6 milliards d'années. Chaque nouvelle découverte nous
            rapproche de la compréhension de notre place dans le cosmos.
          </p>
          <p>
            Le Soleil génère son énergie par fusion nucléaire&nbsp;: l'hydrogène se transforme
            en hélium, libérant une chaleur indispensable à la vie sur Terre. Dans quelques
            milliards d'années, il se dilatera en géante rouge avant de finir naine blanche,
            laissant derrière lui une empreinte durable sur l'ensemble du système solaire.
          </p>
        </div>

      </main>
    </>
  )
}

export default Home
