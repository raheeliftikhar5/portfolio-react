import React from 'react';
import './Navbar.scss';

function Navbar() {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'contact') {
      window.location.href = 'mailto:iraheel021@gmail.com';
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPos = section.offsetTop;
      window.scrollTo({
        top: sectionPos,
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  
  return(
    <div className="navbar-menu text-center d-lg-block d-none">
      <div onClick={(e) => scrollToSection('about')}>ABOUT</div>
      <div onClick={(e) => scrollToSection('work')}>WORK</div>
      <div onClick={(e) => scrollToSection('skills')}>SKILLS</div>
      <div onClick={(e) => scrollToSection('portfolio')}>PORTFOLIO</div>
      <div onClick={(e) => scrollToSection('contact')}>CONTACT</div>
    </div>
  )
}

export default Navbar;