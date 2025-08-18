import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./componentes/layouts/Header";
import Nav from "./componentes/layouts/Nav";
import Home from './paginas/Home';
import Lugares from './paginas/Lugares';
import Footer from "./componentes/layouts/Footer";


function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lugares" element={<Lugares/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

