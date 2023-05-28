import React from "react";
import "../css/Invitacion.css";
import dwight from "../img/dwight.png";

function Invitacion() {
  return (
    <div className="background-invitation">
        <div className="invitation">
      <div class="container text-center">
        <div class="row">
          <div class="col invitation-birthday-party">
            <p className="invitation-text">Birthday Party!</p>
          </div>
          <div className="col-6 container-dwight">
            <p className="quote">"¿Sólo se vive una vez? ¡Falso!</p>
            <p className="quote" style={{ paddingLeft: "15px" }}>
              Se vive todos los días, se muere sólo una vez".
            </p>
            <p className="quote-person">- Dwight Schrute</p>
            <div className="img-center">
              <img src={dwight} className="img-dwight" />
            </div>
            <p className="quote" style={{ marginTop: "1.5rem" }}>
              Por eso te invito a festejar conmigo mi cumple n° 29{" "}
            </p>
          </div>
          <div className="col container-info">
            <div>
              <div className="flex-details" style={{ marginBottom: "1rem" }}>
                <div className="title-detail">Lugar</div>
                <div>Mi casa</div>
              </div>
              <div>Avellaneda 1851 8 B</div>
            </div>
            <div className="flex-details">
              <div className="title-detail" style={{ marginRight: "35px" }}>
                Dia
              </div>
              <div>Sabado 26/8</div>
            </div>
            <div className="flex-details">
              <div className="title-detail" style={{ marginRight: "25px" }}>
                Hora
              </div>
              <div>18.30 hs</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Invitacion;
