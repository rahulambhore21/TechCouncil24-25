import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AnimatedTitle from "../components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About_Us = () => {
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
    <>
    <Navbar/>
    <div id="about" className="min-h-screen w-screen bg-gray-100">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-4">
        <p className="font-general text-sm uppercase text-blue-600 md:text-[10px]">
          Welcome to Tech Council VIT Mumbai
        </p>

        <AnimatedTitle
          title="Empowering Innovators <br /> and Future Leaders"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext text-center max-w-2xl">
          <p className="mb-2">Join us in our mission to foster technological innovation and leadership.</p>
          <p className="text-gray-500">
            The Tech Council of VIT Mumbai is dedicated to providing a platform for students to explore, innovate, and excel in the field of technology.
          </p>
        </div>
      </div>

      <div className="w-full py-12 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the College</h2>
        <img src="/path/to/college.jpg" alt="College" className="h-48 mb-4 rounded-lg shadow-lg w-auto"/>
        <p className="text-gray-700 max-w-2xl text-center">
          VIT Mumbai is a premier institution known for its excellence in education and research. Our mission is to create leaders who can drive innovation and make a positive impact on society.
        </p>
      </div>

      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Council</h2>
        <img src="/path/to/council.jpg" alt="Council" className="h-48 mb-4 rounded-lg shadow-lg w-auto"/>
        <p className="text-gray-700 max-w-2xl text-center">
          The Tech Council of VIT Mumbai is a student-run organization that aims to foster a culture of technological innovation and leadership among students. We organize various events, workshops, and competitions to help students enhance their skills and knowledge.
        </p>
      </div>

      <div className="w-full py-12 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Fest</h2>
        <img src="/path/to/fest.jpg" alt="Fest" className="h-48 mb-4 rounded-lg shadow-lg w-auto"/>
        <p className="text-gray-700 max-w-2xl text-center">
          Our annual tech fest is a celebration of technology and innovation. It brings together students, professionals, and enthusiasts from various fields to share knowledge, showcase projects, and compete in various events.
        </p>
      </div>

      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Fest Theme</h2>
        <img src="/path/to/theme.jpg" alt="Fest Theme" className="h-48 mb-4 rounded-lg shadow-lg w-auto"/>
        <p className="text-gray-700 max-w-2xl text-center">
          This year's fest theme is "Venture-Verse". We aim to highlight the importance of sustainable practices and how technology can be leveraged to create a better and more sustainable world.
        </p>
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
    <Footer/>
    </>
  );
};

export default About_Us;
