import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Aute from './components/Autenticacion/Aute';
import VAdmin from './components/VistaAdmin/VAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Aqui se linkea de la forma que esta arriba + el formato de abajo*/}
          <Route path="/" element={<Inicio />} />
          <Route path="/autenticacion" element={<Aute />} />
          <Route path="/Vistaadmin/*" element={<VAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;