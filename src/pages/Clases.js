import React from "react";
import CarrouselClases from "../components/carrouseles/CarrouselClases";
import '../styles/Clases.css';

const Clases = (props) => {
  return (

    <div className="horarios">
      <CarrouselClases />
      <img src="imagenes/Clases/Clases horarios.png" width="960" height="500" alt="horarios" style={{ display: "block", margin: "0 auto" }} />
    </div>
  );
};

export default Clases;