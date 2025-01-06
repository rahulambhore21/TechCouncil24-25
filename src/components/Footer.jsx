import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/technical_council.vit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: <FaInstagram /> },
  
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#d6de36] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Tech Council Vit. All rights reserved
        </p>
        <p className="text-center text-sm font-light md:text-left">
          Developed by <a href="https://github.com/adarshmeshram" target="_blank" rel="noopener noreferrer"><b>Adarsh Meshram</b></a> and <a href="https://rahulambhore21.github.io/Portfolio" target="_blank" rel="noopener noreferrer"><b>Rahul Ambhore</b></a>
        </p>
        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 mr-10  ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center hidden mr-2 text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
