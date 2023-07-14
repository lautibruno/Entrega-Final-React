
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Asociate from "./pages/Asociate";
import Contacto from "./pages/Contacto";
import Clases from "./pages/Clases";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="asociate" element={<Asociate />} />
          <Route path="clases" element={<Clases />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
