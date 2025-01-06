import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-gray-100">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-4">
        <p className="font-general text-sm uppercase text-blue-600 md:text-[10px]">
          Welcome to Tech Council VIT Mumbai
        </p>

        <AnimatedTitle
          title="ALGORHYTHM"
          containerClass="mt-5 !text-black text-center "
        />

        <div className="about-subtext text-center max-w-2xl">
          {/* <p className="mb-2">Join us in our mission to foster technological innovation and leadership.</p>
          <p className="text-gray-500">
            The Tech Council of VIT Mumbai is dedicated to providing a platform for students to explore, innovate, and excel in the field of technology.
          </p> */}
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;


