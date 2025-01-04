import React from 'react';
import Card from './Card';
import sampleImage from '../assets/poster/aquasurge.png'; // Sample image
import AnimatedTitle from "./AnimatedTitle";

const EventsCards = () => {
  const events = Array.from({ length: 18 }, (_, index) => ({
    src: sampleImage,
    title: `Event ${index + 1}`,
    description: `Description for Event ${index + 1}`,
  }));

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle
            title="Events"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
          {events.map((event, index) => (
            <div key={index} className="flex justify-center mb-7">
              <Card src={event.src} title={event.title} description={event.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCards;