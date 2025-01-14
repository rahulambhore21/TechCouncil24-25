import { useState, useRef } from "react";
import { Link } from "react-router";
import aquasurge from "../assets/poster/aquasurge.webp";
import codeathon from "../assets/poster/codeathon.png";
import droneracing from "../assets/poster/droneracing.png";
import mechvelocity from "../assets/poster/mechvelocity.jpg";
import robokick from "../assets/poster/robokick.png";
import AnimatedTitle from "./AnimatedTitle";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
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

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <img
        src={src}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 bg-black bg-opacity-50">
        <div>
          <h1 className="bento-title special-font text-2xl md:text-3xl">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-lg">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <Link
            to={{ pathname: "/events", hash: "#top" }}
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            {/* <TiLocationArrow className="relative z-20" /> */}
            <p className="relative text-yellow-500 z-20">Registration</p>
          </Link>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle
            title="Events"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          {/* <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience
            on your world.
          </p> */}
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={aquasurge}
            title={
              <>
                AquaSurge
              </>
            }
            description="Experience the ultimate water adventure with AquaSurge, featuring thrilling rides and attractions."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={codeathon}
              title={
                <>
                  CodeAthon
                </>
              }
              description="Join the ultimate coding competition and showcase your programming skills at CodeAthon."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={droneracing}
              title={
                <>
                  DroneRacing
                </>
              }
              description="Experience the thrill of high-speed drone racing with cutting-edge technology."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={mechvelocity}
              title={
                <>
                  MechVelocity
                </>
              }
              description="Step into the future with MechVelocity, featuring advanced robotics and AI technology."
              isComingSoon
            />
          </BentoTilt>

          <Link to="/events" className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                More Events
              </h1>
              {/* <TiLocationArrow className="m-5 scale-[5] self-end" /> */}
            </div>
          </Link>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src={robokick}
              title={
                <>
                  RoboKick
                </>
              }
              description="Experience the thrill of RoboKick, where cutting-edge robotics meet competitive sports in an exhilarating showdown."
              isComingSoon
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
