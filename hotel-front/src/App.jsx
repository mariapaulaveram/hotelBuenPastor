import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from './componentes/layouts/Layout';
import Home from './paginas/Home';
import Lugares from './paginas/Lugares';
import LugarDetalle from "../src/componentes/lugares/LugarDetalle";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lugares" element={<Lugares />} />
          <Route path="/lugares/:id" element={<LugarDetalle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

