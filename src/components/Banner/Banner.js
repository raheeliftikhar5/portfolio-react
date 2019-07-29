import React from 'react';
import Navbar from '../Navbar/Navbar';
import Social from '../Social/Social';
import './Banner.scss';
import ProfileImage from '../../assets/images/image.jpg';

function Banner({user}) {
  return (
    <section className="banner" id="banner">
      <div className="d-flex flex-column justify-content-between align-items-center container container--large banner__content">
        <Navbar></Navbar>
        <div className="d-flex flex-row justify-content-center align-items-center flex-wrap profile">
          <div className="col-md-12 col-lg-6 profile__image pr-5">
            <img src={ProfileImage} alt="Profile"/>
          </div>
          <div className="col-md-12 col-lg-6 profile__content pl-5">
            <h1 className="text-uppercase">{user.name}</h1>
            <h2>{user.title}</h2>
            <a className="download-resume" href="https://drive.google.com/file/d/1OpKRKhzEJIyOP2T5ONYbquXFZN3mPdmn/view" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
        <Social></Social>
      </div>
    </section>
  )
}

export default Banner;