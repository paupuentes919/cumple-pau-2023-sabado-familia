import React from "react";
import "../css/Galeria.css";
import Galeria1 from "../img/galeria1.jpg";
import Galeria2 from "../img/galeria2.jpg";
import Galeria3 from "../img/galeria3.jpg";
import Galeria4 from "../img/galeria4.jpg";
import Galeria5 from "../img/galeria5.jpg";
import Galeria6 from "../img/galeria6.jpg";
import Galeria7 from "../img/galeria7.jpg";
import Galeria8 from "../img/galeria8.jpg";
import Galeria9 from "../img/galeria9.jpg";
import Galeria10 from "../img/galeria10.jpg";
import Galeria11 from "../img/galeria11.jpg";
import Galeria12 from "../img/galeria12.jpg";

function Galeria() {
  return (
    <div className="background-image-galeria">
      <div className="galeria-text-container">
        <p className="galeria-text">Galeria de Imagenes</p>
      </div>
      <div className="container-galeria-imagenes">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Mi cumpleaños número 28 en mi casa, festejando con amigos de Globant y ExxonMobil
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Mi cumpleaños número 28 en mi country, festejando con mi hermana, mis primos y mi novio
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Mi cumpleaños número 28 en mi casa, festejando con amigos de la facultad y del colegio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Una salida casual con ex Productivity Solutions. Foto tomada después de un gran almuerzo
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria5} class="card-img-top" alt="..." style={{height: "17rem"}}/>
                <div class="card-body">
                  <p class="card-text">
                    Año nuevo 2022 en mi casa, festejando con amigos y familia. Somos un montón, que bueno!
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Muuuuchachos! Ahora nos volvimos a ilusionar. Festejando el mundial en el obelisco con mi novio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria7} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    El día que me recibí de ingeniera industrial, antes de la tirada de huevos! Siempre presentes mis amigas
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria8} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">
                    Después de la tirada de huevos cuando me recibí de ingeniera industrial, con mis amigas del colegio
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria9} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Una juntada en mi casa con mis amigas del colegio. No faltó nadie, gran audiencia y convocatoria! 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria10} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Tirada de huevos en la facultad a un amigo. Que bueno que celebremos todos juntos nuestros logros!
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria11} class="card-img-top" alt="..." style={{height: "17rem"}}/>
                <div class="card-body">
                  <p class="card-text">
                    Casamiento de Caro y Sebas. Noche inolvidable, gracias por todo chicos! La pasamos re bien
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "23rem" }}>
                <img src={Galeria12} class="card-img-top" alt="..." style={{height: "17rem"}}/>
                <div class="card-body">
                  <p class="card-text">
                    En Japón con mi familia y el vendehumo de Santi. Que bien que la pasamos, cuando se repite?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
