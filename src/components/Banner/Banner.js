import React from 'react';
import './Banner.scss';

function Banner({user}) {
  return (
    <section className="banner">
      <div className="d-flex flex-column justify-content-center align-items-center container container--large banner__content">
        <div className="d-flex flex-row justify-content-center align-items-center flex-wrap profile">
          <div className="col-md-12 col-lg-6 profile__image pr-5">
            <img src={user.profile_image} alt="Profile"/>
          </div>
          <div className="col-md-12 col-lg-6 profile__content pl-5">
            <h1 className="text-uppercase">{user.name}</h1>
            <h2>{user.title}</h2>
            <a className="download-resume" href="https://drive.google.com/file/d/1OpKRKhzEJIyOP2T5ONYbquXFZN3mPdmn/view" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;