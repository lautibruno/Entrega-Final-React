import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarrouselHome = () => {
  return (
    <div>
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./imagenes/salongym2.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./imagenes/salongym3.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./imagenes/salongym4.png" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarrouselHome;