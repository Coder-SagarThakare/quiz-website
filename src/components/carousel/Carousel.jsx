import React from "react";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.svg";
import { useState } from "react";
import "./Carousel.css";


function Carousel() {
  const [clickedIndex, setClickedINdex] = useState(0);
  const img = [ slide2,slide1, slide3];

  console.log(clickedIndex);

  const handleToIncreaseClickIndex = () => {
    clickedIndex === img.length - 1
      ? setClickedINdex(0)
      : setClickedINdex(clickedIndex + 1);
  };
  const handleToDecreaseClickIndex = () => {
    clickedIndex === 0
      ? setClickedINdex(img.length - 1)
      : setClickedINdex(clickedIndex - 1);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        {img.map((ele, ind) => (
          <div
            className={`carousel-item  ${
              clickedIndex === ind ? "active d-flex justify-content-center" : ""
            }`}
            key={ind}
          >
            <img src={ele} className="d-block border object-fit-fill" alt="sliding iamge" />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() => handleToDecreaseClickIndex()}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() => handleToIncreaseClickIndex()}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
