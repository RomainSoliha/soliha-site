import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';

function Banner({ title }) {
  return (
    <div style={{
      height: '180px',
      backgroundColor: '#005A87',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px'
    }}>
      {title}
    </div>
  );
}

function Accueil() {
  return <>
    <Banner title="Bienvenue chez SOLIHA" />
    <main style={{ padding: '1rem' }}>
      <p>Amélioration de l'habitat, rénovation énergétique et accompagnement social.</p>
    </main>
  </>;
}

function Renovation() {
  return <>
    <Banner title="MaPrimeRénov' et rénovation" />
    <main style={{ padding: '1rem' }}>
      <p>Accompagnement pour vos projets de rénovation énergétique avec SOLIHA.</p>
    </main>
  </>;
}

function Adapt() {
  return <>
    <Banner title="Ma Prime Adapt" />
    <main style={{ padding: '1rem' }}>
      <p>Adaptation du logement pour les personnes âgées ou en situation de handicap.</p>
    </main>
  </>;
}

function Solibail() {
  return <>
    <Banner title="Dispositif Solibail" />
    <main style={{ padding: '1rem' }}>
      <p>Location solidaire avec gestion complète pour les propriétaires.</p>
    </main>
  </>;
}

function App() {
  return (
    <Router>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Accueil</Link>
          <Link to="/renovation">Rénovation</Link>
          <Link to="/adapt">Ma Prime Adapt</Link>
          <Link to="/solibail">Solibail</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/adapt" element={<Adapt />} />
        <Route path="/solibail" element={<Solibail />} />
      </Routes>
    </Router>
  );
}

export default App;
