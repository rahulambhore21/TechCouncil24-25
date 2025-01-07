import React, { useRef, useState, useEffect } from 'react';
import "./Slider.css";
import Cards from './Cards';
import aquasurge from "../../assets/poster/aquasurge.webp";
import codeathon from "../../assets/poster/codeathon.webp";
import droneracing from "../../assets/poster/droneracing.png";
import groklive from "../../assets/poster/groklive.png";
import mechvelocity from "../../assets/poster/mechvelocity.png";
import robokick from "../../assets/poster/robokick.png";
import steelstriker from "../../assets/poster/steelstriker.png";
import ipl from "../../assets/poster/ipl.jpg";
import maze from "../../assets/poster/maze.png";
import codemaster from "../../assets/poster/codemaster.jpg";
import iste from "../../assets/poster/iste.jpg";
import revolutionx from "../../assets/poster/revolutionx.jpg";
import v2v from "../../assets/poster/v2v.jpg";
import waterro from "../../assets/poster/waterro.jpg";
import codecombat from "../../assets/poster/codecombat.jpg";
import Button from "../Button";

export const object =  [
  {
    
    "title": "Robo Kick",
    "description": "A thrilling robot soccer event that blends innovation and excitement as teams showcase their engineered creations in dynamic soccer matches. This event highlights technical prowess, strategic thinking, and creative robotics design.",
    "img": robokick
  },{
    "title": "Aqua Surge",
    "description": "Dive into the world of underwater robotics! Teams design and build robots to navigate aquatic challenges, showcasing their engineering skills, creativity, and problem-solving abilities in a thrilling competition.",
    "img": aquasurge
  },
  {
    "title": "Mech Velocity",
    "description": "Experience the adrenaline of a robot race! Robots navigate challenging tracks with speed, precision, and agility. This event celebrates engineering ingenuity, advanced technology, and the competitive spirit of robotics.",
    "img": mechvelocity
  },
  {
    "title": "Steel Striker",
    "description": "Witness the ultimate robot sumo showdown! Robots face off in intense battles for dominance in the arena, showcasing exceptional engineering, strategy, and innovative design.",
    "img": steelstriker
  },
  {
    "title": "Grock Live",
    "description": "Step into the future with real-life IoT challenges designed to spark innovation and critical thinking. Participants tackle problem-solving on the spot while exploring advanced IoT specimens, gaining hands-on experience in cutting-edge technology.",
    "img": groklive
  },
  {
    "title": "Code-a-thon",
    "description": "An 8-hour software hackathon that pushes developers to their limits. Teams collaborate to craft innovative solutions, fostering creativity, teamwork, and problem-solving in a dynamic coding environment.",
    "img": codeathon
  },
  {
    "title": "Drone Racing",
    "description": "Test your drone's agility and speed in this high-octane race! Participants navigate complex courses with precision, showcasing advanced control and piloting skills in a thrilling competition.",
    "img": droneracing
  },
  {
    "title": "Code Clash",
    "description": "Unleash your creativity by building and publicizing your personal branding website. Plan, design, and develop a unique digital presence to showcase your skills and stand out.",
    // "img": codeclash
  },
  {
    "title": "Code Master",
    "description": "Face a series of exciting coding challenges that test your ability to debug, solve problems, and develop solutions under pressure. Are you ready for the ultimate coding adventure?",
    "img": codemaster
  },
  {
    "title": "Revolution X",
    "description": "Join a real-world ideathon where you identify, pitch, and develop innovative solutions to pressing challenges. It’s time to think big and make an impact!",
    "img": revolutionx
  },
  {
    "title": "Bid Blaze",
    "description": "Immerse yourself in a high-energy auction scenario with a technical twist! Strategize to build the perfect combination of resources and outsmart competitors to win.",
    "img": ipl
  },
  {
    "title": "AESS Water Rocket",
    "description": "Combine physics and fun in this exciting water rocket competition! Attend a workshop, design your rocket, and see how high it can fly.",
    "img": waterro
  },
  {
    "title": "IEEE VIT – Vision to Venture",
    "description": "Step into the world of business and strategy! Develop innovative ideas, tackle real-world scenarios, and pitch your way to success in this entrepreneurial challenge.",
    "img": v2v
  },
  {
    "title": "It’s a Maze Solver",
    "description": "Embark on a thrilling journey to crack the mystery of the maze! Use your problem-solving skills, agility, and wit to complete each stage and emerge victorious.",
    "img": maze
  },
  {
    "title": "Code Combat",
    "description": "Prepare for the ultimate speed coding showdown! Compete against other coding giants to debug, accelerate, and conquer challenges in a fast-paced environment.",
    "img": codecombat
  },
  {
    "title": "ISTE – Innovation Auction League",
    "description": "Bring your ideas to life in this unique real-world project competition. Participate in market-style bidding, enhance your designs, and make your project irresistible to win the league!",
    "img": iste
  }
]


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

  const handleRegisterClick = () => {
    // Handle registration click
  };

  const handleDownloadClick = () => {
    // Handle download click
  };

  return (
    <div className={`carousel ${showDetail ? 'showDetail' : ''}`} ref={carouselRef}>
      <div className="list" ref={listRef}>
        {object.map((item, index) => (
          <Cards
            key={index}
            council={"Technical Council"}
            img={item.img}
            title={item.title}
            description={item.description}
            onSeeMoreClick={handleSeeMoreClick}
            onRegisterClick={handleRegisterClick}
            onDownloadClick={handleDownloadClick}
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