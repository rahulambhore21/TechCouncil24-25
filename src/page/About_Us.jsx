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
    <div id="about" className="min-h-screen w-screen bg-gray-100 overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-4">
        <p className="font-general text-sm uppercase text-blue-600 md:text-[10px]">
          Welcome to Tech Council VIT Mumbai
        </p>

        <AnimatedTitle
          title="Empowering Innovators <br /> and Future Leaders"
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      <div className="w-full py-12 bg-white flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the College</h2>
        <img src="/img/college.webp" alt="College" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
        <p className="font-serif text-gray-700 max-w-2xl text-center">
        Vidyalankar Wadala Campus is 11 acres home to 3 colleges,
Vidyalankar Institute Of Technology (VIT) ,Vidyalankar
Institute Of Information Technology (VSIT) and
Vidyalankar Polytechnic (VP), that houses over 9000
students and 750 teaching and non-teaching staff.
Vidyalankar Institute of Technology (VIT) is an
Engineering Degree College approved by the All India
Council for Technical Education (AICTE). It has been
bestowed with an A+ grade by National Assessment and
Accreditation Council (NAAC) and all its programs are also
accredited to the council. The Institute has permanent
affiliation with Mumbai University and has also been
awarded the Best Institute of the year by TechNext India
in 2019. As of 2022, it has been bestowed the status of an
autonomous college
        </p>
      </div>

      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Council</h2>
        <img src="/img/techlogo.jpg" alt="Council" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
        <p className="font-serif text-gray-700 max-w-2xl text-center">
          The Technical Council of VIT is a vital part of the Student Council, embodying the spirit of innovation, creativity, and social responsibility. It serves as a dynamic platform where students come together to explore cutting-edge technologies, solve real-world challenges, and transform visionary ideas into practical, impactful solutions. This council is the driving force behind VIT’s technical ecosystem, organizing diverse events such as hackathons, workshops, coding marathons, and ideation sessions. These activities are designed to foster technical excellence, ignite creativity, and encourage collaboration among students. By offering such opportunities, the Technical Council ensures that students are well-prepared to thrive in a fast-evolving, technology-driven world.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          In addition to technical pursuits, the council places a strong emphasis on social responsibility. Through innovative projects and initiatives, it integrates technology with societal welfare, focusing on sustainability, community development, and creating a positive social impact.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          As a bridge connecting academia, industry, and society, the Technical Council plays a pivotal role in nurturing leadership, fostering collaboration, and empowering students to take on challenges with confidence and ingenuity. It reflects VIT’s commitment to shaping future leaders and innovators who are equipped to make meaningful contributions to the world.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          Whether it’s advancing technological frontiers or driving social change, the Technical Council stands as a testament to the university’s dedication to excellence, inclusivity, and progress.
        </p>
      </div>

      <div className="w-full py-12 bg-black flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Fest</h2>
        <img src="/img/arlogo.png" alt="Fest" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
        <p className="font-serif text-white max-w-2xl text-center">
          Algorhythm, the annual techfest of VIT, is a grand celebration of innovation, technology, and creativity. Organized by the Technical Council, it provides a vibrant platform where students from diverse colleges converge to showcase their talents, explore emerging technologies, and engage in spirited competitions.
        </p>
        <p className="font-serif text-white max-w-2xl text-center mt-4">
          The techfest features a diverse lineup of activities, including technical events, competitions, seminars, and hackathons, designed to inspire, educate, and foster collaboration among participants. It serves as a hub for innovation, enabling students to exchange ideas, develop solutions, and gain insights into the latest advancements in technology.
        </p>
        <p className="font-serif text-white max-w-2xl text-center mt-4">
          What sets Algorhythm apart is its unmatched scale and impact. With participation from over 13,000 attendees, it stands as one of the most prominent student-led technical festivals in the country. The event not only highlights VIT's dedication to technological excellence but also provides a unique opportunity for students to connect with peers, industry leaders, and mentors while showcasing their creativity and technical prowess.
        </p>
        <p className="font-serif text-white max-w-2xl text-center mt-4">
          Algorhythm is more than just a techfest; it is a celebration of ambition, discovery, and progress. Year after year, it sets new benchmarks, leaving a lasting impression on all participants and affirming its place as a beacon of innovation and excellence.
        </p>
      </div>

      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Fest Theme</h2>
        <img src="/img/img-3.jpg" alt="Fest Theme" className="w-full h-auto mb-4 rounded-lg shadow-lg"/>
        <p className="font-serif text-gray-700 max-w-2xl text-center">
          At the heart of "Venture Verse" lies a vision that embodies exploration, innovation, and limitless possibilities. This theme was carefully chosen to reflect our unwavering belief in the power of entrepreneurship, technology, and the human spirit to shape the future.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          "Venture" signifies bold endeavors, risk-taking, and the relentless pursuit of solutions to challenges that define our era. It celebrates the entrepreneurial spirit and the drive to turn ideas into impactful realities.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          "Verse" symbolizes an interconnected ecosystem where creativity, technology, and collaboration converge, forming a universe of opportunities. It emphasizes the harmonious blend of diverse perspectives and disciplines, inspiring a community that thrives on synergy and innovation.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          Together, Venture Verse represents a commitment to fostering groundbreaking ideas and building a future where possibilities are boundless. It invites students, innovators, and industry leaders to co-create a vibrant narrative of progress and success.
        </p>
        <p className="font-serif text-gray-700 max-w-2xl text-center mt-4">
          By adopting this theme, we aim to inspire all stakeholders to dream bigger, collaborate better, and venture further into the unknown. "Venture Verse" is not just a theme; it’s a call to action—a journey into a future shaped by creativity, ingenuity, and determination.
        </p>
      </div>

      {/* <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/img-3.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default About_Us;
