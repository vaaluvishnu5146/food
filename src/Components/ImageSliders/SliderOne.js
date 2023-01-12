import React from "react";

const items = [
  {
    src: "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "Grab the offer",
    caption: "Offer 1",
    key: 1,
  },
  {
    src: "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "BOGO",
    caption: "Offer 2",
    key: 2,
  },
  {
    src: "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "Flash sale",
    caption: "Offer 3",
    key: 3,
  },
];

export default function SliderOne() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg"
            class="d-block w-100"
            alt="alider1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg"
            class="d-block w-100"
            alt="slider2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg"
            class="d-block w-100"
            alt="slider3"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
