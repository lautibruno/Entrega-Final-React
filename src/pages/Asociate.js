import React from "react";
import '../styles/Asociate.css';

const Asociate = (props) => {
  return (
    <div className="asociatecontainer">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="asociate">
          <h2>Formulario para asociarse</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Apellido</label>
              <input type="text" className="form-control" id="apellido" placeholder="Ingrese su apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Fecha de nacimiento</label>
              <input type="date" className="form-control" id="fecnacimiento" placeholder="Ingrese su fecha de nacimiento" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su teléfono" />
            </div>
            <button type="submit" className="btn btn-asociate">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Asociate;