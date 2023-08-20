import React from "react";
import "../css/Invitacion.css";
import dwight from "../img/dwight.png";

function Invitacion() {
  return (
    <div className="background-invitation">
      <div className="birthday-party-container">
        <h1 className="birthday-party-title">Birthday Party</h1>
      </div>
      <div className="quote-dwight-container">
        <div className="quote-dwight">
          <p className="quote-dwight-text">¿Sólo se vive una vez? ¡Falso!</p>
          <p className="quote-dwight-text">
            Se vive todos los días, se muere sólo una vez
          </p>
          <p className="quote-dwight-text-name">- Dwight Schrute</p>
          <div className="dwight-img-container">
            <img src={dwight} className="dwight-img" alt="dwight"/>
          </div>
        </div>
      </div>
      <div className="cumple-29-container">
        <span className="cumple-29-text">Por eso te invito a festejar mi cumple n° 29</span>
      </div>
      <div className="datos-container">
        <div className="dia-container">
          <p className="dia">Dia: </p>
          <p className="dia-text">Sabado 2 de Septiembre</p>
        </div>
        <div className="dia-hora">
          <p className="hora">Hora: </p>
          <p className="hora-text">13 hs</p>
        </div>
        <div className="dia-lugar">
          <p className="lugar">Lugar: </p>
          <p className="lugar-text">Country San Eliseo</p>
        </div>
      </div>
    </div>
  );
}

export default Invitacion;
