import React from "react";
import carouselImg1 from "../img/carousel-1.jpg";
import carouselImg2 from "../img/carousel-2.jpg";
import carouselImg3 from "../img/carousel-3.jpg";
import "../css/Carousel.css"

function Carousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouselImg1} class="d-block w-100 img-size" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Pau por Chicago!</h5>
        <p>Paseando y disfrutando las vistas en Navy Pier</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carouselImg2} class="d-block w-100 img-size" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Pau por Chicago 2!</h5>
        <p>Paseando y dusfrutando las vistas en Lincoln Park</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carouselImg3} class="d-block w-100 img-size" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Pau por Toronto!</h5>
        <p>En el estadio de baseball de los Blue Jay</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carousel;
