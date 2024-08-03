import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGit, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-black text-white p-4 fixed w-full top-0 left-0 z-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold lg:mr-80 p-2 font-serif">RUSHI</div>

          <ul
            className={`lg:flex lg:space-x-1 lg:static absolute top-14 left-0 w-full bg-black lg:bg-transparent ${
              isMenuOpen ? "block" : "hidden"
            } `}
          >
            <li className="block lg:inline p-4 lg:p-10 hover:text-yellow-500 cursor-pointer"><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
            <li className="block lg:inline p-4 lg:p-10 hover:text-yellow-500 cursor-pointer"><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
            <li className="block lg:inline p-4 lg:p-10 hover:text-yellow-500 cursor-pointer"><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
            <li className="block lg:inline p-4 lg:p-10 hover:text-yellow-500 cursor-pointer"><Link to="experience" smooth={true} duration={500} offset={-70}>Experience</Link></li>
            <li className="block lg:inline p-4 lg:p-10 hover:text-yellow-500 cursor-pointer"><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
            <li className="block lg:inline p-4 lg:pt-10 lg:pb-10 lg:pl-0 hidden">|</li>
            <li className="block lg:inline p-4 hidden lg:pt-10 pl-0">
              <a href="https://www.linkedin.com/in/rushikesh-shinde-8a2b72222/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" style={{ color: '#0A66C2' }} />
              </a>
            </li>
            <li className="block lg:inline p-4 hidden lg:pt-10 pl-0">
              <a href="https://github.com/Rocky17292" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGit} style={{ color: '#ffffff' }} />
              </a>
            </li>
            <li className="block lg:inline p-4 hidden lg:pt-10 pl-0">
            <a href="https://www.instagram.com/rushi__r_07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F' }} />
            </a>
          </li>
          </ul>

          <div className="lg:hidden mr-3">
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
