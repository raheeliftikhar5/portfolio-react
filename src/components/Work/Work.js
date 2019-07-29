import React from 'react';
import './Work.scss';

function Work() {
  return (
    <section className="section container container--large work" id="work">
      <div className="section__heading text-center">
        <h1 className="text-uppercase">Work Experience</h1>
      </div>
      <div className="section__content">
        <div className="d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-md-6 text-right milestone left">
              <div>
                <h3 className="font-weight-bold">HireNinja Inc.</h3>
                <h3>Frontend Developer</h3>
                <p>(Feb 2016 - Current)</p>
              </div>
              <div className="marker"></div>
            </div>
            <div className="col-md-6 useless-column"></div>
          </div>
          <div className="row">
            <div className="col-md-6 useless-column"></div>
            <div className="col-md-6 text-left milestone right">
              <div>
                <h3 className="font-weight-bold">Upwork</h3>
                <h3>Freelance Web Developer</h3>
                <p>(Nov 2015 - Jan 2016)</p>
              </div>
              <div className="marker"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-right milestone left">
              <div>
                <h3 className="font-weight-bold">Pearl Soft</h3>
                <h3>UI/UX Developer</h3>
                <p>(Aug 2015 - Oct 2015)</p>
              </div>
              <div className="marker"></div>
            </div>
            <div className="col-md-6 useless-column"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;