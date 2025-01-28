import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaFacebook, FaTwitter, FaGlobe, FaEnvelope } from "react-icons/fa"

const socialLinks = [
  { href: "https://www.facebook.com/grokacademy", icon: <FaFacebook /> },
  { href: "https://twitter.com/grokacademy", icon: <FaTwitter /> },
  { href: "https://groklearning.com/", icon: <FaGlobe /> },
  { href: "mailto:support@groklearning.com", icon: <FaEnvelope /> },
];

function Sponsors() {
  return (
    <div className="content-wrapper">
      <Navbar/>
      <div className="w-full h-32 py-28 bg-gray-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Title Sponsors</h1>
      </div>
      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
        <div className="flex flex-col items-center">
          <div className="m-4">
            <img src="img/groklogo.png" alt="Grok" className="h-auto w-auto lg:h-64"/>
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-white flex flex-col items-center px-4">
        <h2 className="text-gray-800 text-3xl mb-4">About Grok Learning:</h2>
        <ul className="text-gray-700 text-lg mb-8 text-left max-w-4xl list-disc list-inside">
          <li>Founded in 2019, by 5 co-founders with extensive experience in co-founding &amp; managing multiple innovative technology companies in both Silicon Valley, USA, and India, the company has been at the forefront of pioneering innovation in education.</li>
          <li>Their deep passion for fostering a culture of innovation drives the core philosophy of Grok Learning.</li>
        </ul>
        <h2 className="text-gray-800 text-3xl mb-4">Mission:</h2>
        <ul className="text-gray-700 text-lg mb-8 text-left max-w-4xl list-disc list-inside">
          <li>To unlock the innovative potential of students, empowering them to become future job creators and thought leaders.</li>
        </ul>
        <h2 className="text-gray-800 text-3xl mb-4">Vision:</h2>
        <ul className="text-gray-700 text-lg mb-8 text-left max-w-4xl list-disc list-inside">
          <li>To cultivate generations of innovators across all fields by leveraging technology, human  intelligence, and creativity.</li>
        </ul>
        <h2 className="text-gray-800 text-3xl mb-4">Grok’s Platform:</h2>
        <ul className="text-gray-700 text-lg mb-8 text-left max-w-4xl list-disc list-inside">
          <li>We are empowering Educational Institutes using Grovator®, a cloud-based Industry 4.0 integrate 
            development platform. It combines IoT Cloud Computing, AIoT, Robotics &amp; 3D printing software tools, hardware, knowledge resources &amp; thousands of industrial use cases for learning &amp; building.</li>
          <li>The platform helps Educational Institutes:
            <ul className="pl-6">
              <li>to empower faculties to transform theoretical education into skill-based education.</li>
              <li>to develop problem-solving and hands-on skills of students.</li>
              <li>to enable students to create new smart products and services based on real-world industry challenges.</li>
            </ul>
          </li>
        </ul>
        <h2 className="text-gray-800 text-3xl mb-4">Grok’s Video:</h2>
        <div className="text-gray-700 text-lg mb-8 text-left max-w-4xl">
          <iframe src="https://player.vimeo.com/video/782551429?h=d0f500764c" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
        <h2 className="text-gray-800 text-3xl mb-4">Grok’s Platform facilitates Collaboration between Industries & Academic Institutes:</h2>
        <div className="text-gray-700 text-lg mb-8 text-left max-w-7xl">
          <img src="img/image.png" alt="Collaboration" className="h-auto w-auto lg:h-64"/>
        </div>
        <h2 className="text-gray-800 text-3xl mb-4">Success Stories:</h2>
        <ul className="text-gray-700 text-lg mb-8 text-left max-w-4xl list-disc list-inside">
          <li>Grok’s platform is used by over 100 leading private colleges &amp; universities across India.</li>
          <li>Partnered with the State Government to establish &amp; run COEs to enable COE’s across locations.</li>
          <li>Working with global universities from USA, Australia, Middle East, and Bangladesh to jointly develop a skilling program using Grok’s platform.</li>
          <li>Many leading companies have signed up as Industry partners to share their use-cases/problem statements.</li>
          <li>Collaborated with IEEE to offer joint skill-based programs for Industry 4.0.</li>
          <li>Collaborated with NIELIT, a Ministry of IT initiative, to develop joint hands-on programs.</li>
        </ul>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-pink-500" target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Sponsors