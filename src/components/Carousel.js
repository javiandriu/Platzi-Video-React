import React from "react";
import "../styles/Carousel.css";

const Carousel = ({ children }) => (
  <React.Fragment>
    <section className="carousel">
      <div className="carousel__container">
        {children}
      </div>
    </section>
  </React.Fragment>
);

export default Carousel;