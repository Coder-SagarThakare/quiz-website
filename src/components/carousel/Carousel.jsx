import React from "react";
import slide1 from "../../images/istockphoto-837064622-170667a.webp";
import slide2 from "../../images/download.jpeg";
import slide3 from "../../images/download (1).jpeg";
import { useState } from "react";

function Carousel() {
  const [clickedIndex, setClickedINdex] = useState(0);
  const img = [slide1, slide2, slide3];

  console.log(clickedIndex);

  const handleToIncreaseClickIndex = () => {
    clickedIndex === img.length - 1
      ? setClickedINdex(0)
      : setClickedINdex(clickedIndex + 1);
  };
  const handleToDecreaseClickIndex = () => {
    clickedIndex === 0
      ? setClickedINdex(img.length)
      : setClickedINdex(clickedIndex - 1);
  };

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner ">
        {/* <div className="carousel-item " data-bs-interval="1000">
          <img src={slide1} className="d-block w-75" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={slide2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}

        {img.map((ele, ind) => (
          <div
            className={`carousel-item  ${clickedIndex === ind ? "active d-flex justify-content-center"  : ""}`}
            // data-bs-interval="1000"
            key={ind}
          >
            <img src={ele} className="d-block w-75 object-fit-cover" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
        onClick={() => handleToDecreaseClickIndex()}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
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
