import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import PlanetDetail from "./components/PlanetDetail";
import Home from "./components/Home";
import SatellitesDetail from './components/SatellitesDetail';
import Footer from './components/Footer';
import React from 'react';
import './index.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets/:planetId" element={<PlanetDetail />} />
        <Route path='/satellites/:sateliteId' element={<SatellitesDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
