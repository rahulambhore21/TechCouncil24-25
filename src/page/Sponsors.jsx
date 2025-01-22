import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaInstagram, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa"

const socialLinks = [
  { href: "https://www.instagram.com/technical_council.vit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/company/grokacademy", icon: <FaLinkedin /> },
  { href: "https://www.facebook.com/grokacademy", icon: <FaFacebook /> },
  { href: "https://www.grokacademy.org", icon: <FaGlobe /> },
];

function Sponsors() {
  return (
    <div className="content-wrapper">
      <Navbar/>
      <div className="w-full h-32 py-28 bg-gray-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Sponsors</h1>
      </div>
      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
       
        <div className="flex flex-col items-center">
          <div className="m-4">
            <img src="img/groklogo.png" alt="Grok" className="h-auto w-auto lg:h-48"/>
          </div>

        </div>
      </div>
      <div className="w-full py-12 bg-white flex flex-col items-center px-4">
        <h2 className="text-gray-800 text-3xl mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">At Grok Academy, our mission is to educate all learners in transformative computing skills, knowledge and dispositions, empowering them to meet the challenges and seize the opportunities of the future.</p>
        <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">To us, computing encompasses basic digital literacy through to advanced computer science and related disciplines, and the application of these skills across all disciplines.</p>
        <h2 className="text-gray-800 text-3xl mb-4">Our Goal</h2>
        <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">We believe that a solid computer science understanding is vital whether you want to fight climate change, make the next blockbuster movie or unlock the secrets of the universe.</p>
        <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">We've taught thousands of students across Australia to program in classrooms, lecture halls and online, and are now bringing top-notch STEM education into classrooms and homes around the world.</p>
        <h2 className="text-gray-800 text-3xl mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-pink-500">
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