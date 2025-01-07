import React from 'react';
import PropTypes from 'prop-types';
import { BentoTilt, BentoCard } from './Features';
import AnimatedTitle from "./AnimatedTitle";
import { object as events } from './Slider/Slider';
import backgroundImage from "/img/bg-3.jpg"; 

const handleDownloadPDF = (eventTitle) => {
  const link = document.createElement('a');
  link.href = `/path/to/pdf/${eventTitle}.pdf`; // Adjust the path as needed
  link.download = `${eventTitle}.pdf`;
  link.click();
};

const handleExploreLink = (eventTitle) => {
  window.location.href = `/explore/${eventTitle}`; // Adjust the path as needed
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
                isComingSoon
                onClick={() => handleDownloadPDF(event.title)}
                onDoubleClick={() => handleExploreLink(event.title)}
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