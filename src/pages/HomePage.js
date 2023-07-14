import React from "react";
import '../styles/Home.css';
import CarrouselHome from "../components/carrouseles/CarrouselHome";

const HomePage = (props) => {
  return (
    <main className="holder">
      <CarrouselHome />
      <div className="columnas">
        <div className="bienvenidos">
          <h2>¡Empezá a entrenar ya!</h2>
          <p> En nuestra web podrás encontrar toda la información correspondiente para asociarte, precios, información de profesores, horarios de clases, y más!</p>
          <p> Ofrecemos clases de box, entrenamiento funcional, abdominales, ritmos y yoga </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;