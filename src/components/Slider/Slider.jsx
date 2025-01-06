import React, { useRef, useState, useEffect } from 'react';
import "./Slider.css";
import Cards from './Cards';
import aquasurge from "../../assets/poster/aquasurge.webp";
import codeathon from "../../assets/poster/codeathon.png";
import droneracing from "../../assets/poster/droneracing.png";
import groklive from "../../assets/poster/groklive.png";
import mechvelocity from "../../assets/poster/mechvelocity.png";
import robokick from "../../assets/poster/robokick.png";
import steelstriker from "../../assets/poster/steelstriker.png";
import Button from "../Button"

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
      nextButton.onclick = function() {
        showSlider('next');
      };
    }

    if (prevButton) {
      prevButton.onclick = function() {
        showSlider('prev');
      };
    }

    seeMoreButtons.forEach((button) => {
      button.onclick = function() {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
      };
    });

    if (backButton) {
      backButton.onclick = function() {
        carousel.classList.remove('showDetail');
      };
    }

    // if(showDetail)
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

  const handleRegisterClick = () => {
    // Handle registration click
  };

  const handleDownloadClick = () => {
    // Handle download click
  };

  return (
    <div className={`carousel ${showDetail ? 'showDetail' : ''}`} ref={carouselRef}>
      <div className="list" ref={listRef}>
        <Cards img={aquasurge} title={"1Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
        <Cards img={codeathon} title={"3Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
        <Cards img={droneracing} title={"4Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
        <Cards img={groklive} title={"2Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
        <Cards img={mechvelocity} title={"2Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
        <Cards img={robokick} title={"2Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
        <Cards img={steelstriker} title={"2Aqua Surge"} onSeeMoreClick={handleSeeMoreClick} onRegisterClick={handleRegisterClick} onDownloadClick={handleDownloadClick} />
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