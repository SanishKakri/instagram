import React, { useState, useEffect } from "react";
import "./imageSlider.css";

function ImageSlider({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex}`}
      className="slider-image"
    />
  );
}

export default ImageSlider;
