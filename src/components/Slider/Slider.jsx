import React, { useRef, useState, useEffect } from 'react';
import "./Slider.css";
import Cards from './Cards';
import Button from "../Button";
import backgroundImage from "/img/bg-1.png";
import { object } from './eventData'; // Import from eventData.js

const handleRegisterClick = (eventTitle) => {
  window.location.href = `https://forms.gle/your-google-form-link`; // Replace with your Google Form link
};

const Slider = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const [unAcceptClick, setUnAcceptClick] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const showSlider = (type) => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = carouselRef.current;
    const listHTML = listRef.current;

    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
      listHTML.appendChild(items[0]);
      carousel.classList.add('next');
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    setUnAcceptClick(setTimeout(() => {
      nextButton.style.pointerEvents = 'auto';
      prevButton.style.pointerEvents = 'auto';
    }, 500)); // Adjusted timeout to match animation duration
  };

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');
    const carousel = carouselRef.current;

    if (nextButton) {
      nextButton.onclick = function () {
        showSlider('next');
      };
    }

    if (prevButton) {
      prevButton.onclick = function () {
        showSlider('prev');
      };
    }

    seeMoreButtons.forEach((button) => {
      button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
      };
    });

    if (backButton) {
      backButton.onclick = function () {
        carousel.classList.remove('showDetail');
      };
    }

    const interval = setInterval(() => {
      showSlider('next');
    }, 500000);

    return () => clearInterval(interval);
  }, []);

  const handleSeeMoreClick = () => {
    carouselRef.current.classList.remove('next', 'prev');
    setShowDetail(true);
  };

  const handleBackClick = () => {
    setShowDetail(false);
  };

  const handleDownloadClick = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    link.click();
  };

  return (
    <div 
      className={`carousel ${showDetail ? 'showDetail' : ''}`} 
      ref={carouselRef}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Add background image styles
    >
      <div className="list" ref={listRef}>
        {object.map((item, index) => (
          <Cards
            key={index}
            council={"Technical Council"}
            img={item.img}
            title={item.title}
            description={item.description}
            onSeeMoreClick={handleSeeMoreClick}
            onRegisterClick={() => window.location.href = item.registrationLink} // Use the registration link from the item object
            onDownloadClick={() => handleDownloadClick(item.pdf)}
          />
        ))}
      </div>
      <div className="arrows">
        <Button title={"Previous"} id="prev"></Button>
        <Button title={"Next"} id="next"></Button>
        {showDetail && <button id="back" onClick={handleBackClick}>See All &#8599;</button>}
      </div>
    </div>
  );
};

export default Slider;