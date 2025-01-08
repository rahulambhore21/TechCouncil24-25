import React, { useEffect } from "react";
import gsap from "gsap";

const Notfound = () => {
  useEffect(() => {
    gsap.fromTo(
      "#error-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power1.inOut" }
    );
    gsap.to("#error-text", {
      opacity: 0,
      y: 50,
      duration: 3,
      ease: "power1.inOut",
      delay: 1,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".dot", {
      y: -10,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#background",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.inOut" }
    );
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div
        id="background"
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/img/bg-2.jpg')" }}
      ></div>
      <div className="relative text-center z-10">
        <h1 id="error-text" className="text-8xl font-extrabold mb-4">
          404
        </h1>
        <p className="text-2xl mb-4">Oops! Page Not Found</p>
        <p className="text-lg mb-6">
          It seems like you’ve wandered off course. Let’s get you back on track.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default Notfound;
