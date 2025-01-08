import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { BentoTilt } from './Features';
import AnimatedTitle from "./AnimatedTitle";
import { object as events } from './Slider/eventData';
import backgroundImage from "/img/bg-3.jpg"; 

const handleDownloadPDF = (pdfUrl) => {
  if (!pdfUrl) return;
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = pdfUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleExploreLink = (eventTitle) => {
  window.location.href = `/explore/${eventTitle}`; // Adjust the path as needed
};

const BentoCard = ({ src, title, description, registration = null, onClick, onDoubleClick, onRegisterClick }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    onRegisterClick();
  };

  return (
    <div 
      className="relative h-full w-full overflow-hidden" 
      onMouseMove={handleMouseMove}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <img src={src} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 overflow-hidden"> 
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        <button 
          ref={hoverButtonRef}
          className="mt-4 p-2 shadow__btn text-xs md:text-base" // Add responsive text size
          style={{ opacity: hoverOpacity }}
          onClick={handleButtonClick}
        >
          Register
        </button>
        <button 
          className="mt-2 p-2 shadow__btn text-xs md:text-base" // Add responsive text size
          onClick={handleButtonClick}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section 
      className="bg-black pb-52"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Add background image styles
    >
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle
            title="Events"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {events.map((event, index) => (
            <BentoTilt 
              key={index} 
              className="border-hsla relative mb-7 h-72 md:h-96 w-full md:w-4/5 self-center overflow-hidden rounded-md transition-transform transform hover:scale-105"
            >
              <BentoCard
                src={event.img}
                title={event.title}
                description={event.description}
                registration={event.registrationLink || 'defaultRegistrationLink'} // Ensure registration prop is passed
                onClick={() => handleDownloadPDF(event.pdf)}
                onDoubleClick={() => handleExploreLink(event.title)}
                onRegisterClick={() => window.location.href = event.registrationLink || 'defaultRegistrationLink'} // Use the registration link from the event object
              />
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

Events.propTypes = {
  eventCount: PropTypes.number,
};

Events.defaultProps = {
  eventCount: 18,
};

export default Events;