import React from 'react';
import './About.scss';

function About() {
  return (
    <section className="section container container--small about" id="about">
      <div className="section__heading text-center">
        <h1 className="text-uppercase">About Me</h1>
      </div>
      <div className="section__content">
        <div className="introduction about-item">
          <p>Hello! I am Muhammad Raheel Iftikhar and I am frontend developer with 3+ years of experience developing web applications using latest frameworks and libraries. My experience includes:</p>
          <ul>
            <li>Web applicaiton architecture</li>
            <li>UI/UX development</li>
            <li>Responsive & Cross browser support</li>
            <li>Connecting with REST API</li>
            <li>Web Analytics</li>
            <li>Performance optimization</li>
          </ul>
        </div>
        <div className="education about-item">
          <h5 className="sub-heading text-uppercase">Education</h5>
          <ul>
            <li>
              <div>Bachelors of Science in Computer Science - BS(CS)</div>
              <div>National University of Computer & Emerging Sciences, Islamabad  (2011 - 2015)</div>
            </li>
          </ul>
        </div>
        <div className="achievments about-item">
          <h5 className="sub-heading text-uppercase">Achievements</h5>
          <ul>
            <li>
              <div>Best Employee of the Year (2018) - HireNinja Inc.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;