import React from 'react';
import PropTypes from 'prop-types';
import { BentoTilt, BentoCard } from './Features';
import sampleImage from '../assets/poster/aquasurge.webp'; // Sample image
import AnimatedTitle from "./AnimatedTitle";

// Generate events data
const generateEvents = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    src: sampleImage,
    title: `Event ${index + 1}`,
    description: `Description for Event ${index + 1}`,
  }));
};

const Events = ({ eventCount }) => {
  const events = generateEvents(eventCount);

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle
            title="Events"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((event, index) => (
            <BentoTilt 
              key={index} 
              className="border-hsla relative mb-7 h-72 md:h-96 w-4/5 self-center overflow-hidden rounded-md transition-transform transform hover:scale-105"
            >
              <BentoCard
                src={event.src}
                title={event.title}
                description={event.description}
                isComingSoon
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