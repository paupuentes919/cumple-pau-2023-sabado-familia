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
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria5} class="card-img-top" alt="..." style={{height: "18.7rem"}}/>
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria7} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria8} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria9} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria10} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria11} class="card-img-top" alt="..." style={{height: "18.7rem"}}/>
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: "25rem" }}>
                <img src={Galeria12} class="card-img-top" alt="..." style={{height: "18.7rem"}}/>
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
