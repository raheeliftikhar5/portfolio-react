import React from 'react';
import './Skills.scss';

function Skills() {
  return (
    <section className="section container container--large skills" id="skills">
      <div className="section__heading text-center">
        <h1 className="text-uppercase">My Skills</h1>
      </div>
      <div className="section__content">
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-12 col-lg-5 skill-heading">
            <h3>Frontend Development</h3>
          </div>
          <div className="col-md-12 col-lg-6 d-flex flex-row flex-wrap">
            <p className="skill-card card">HTML5</p>
            <p className="skill-card card">CSS / SCSS</p>
            <p className="skill-card card">Javascript</p>
            <p className="skill-card card">AngularJS</p>
            <p className="skill-card card">VueJS</p>
            <p className="skill-card card">ReactJS</p>
            <p className="skill-card card">JQuery</p>
            <p className="skill-card card">Ionic Framework</p>
            <p className="skill-card card">Typescript</p>
            <p className="skill-card card">MomentJS</p>
            <p className="skill-card card">UnderscoreJS / Lodash</p>
            <p className="skill-card card">Bootstrap</p>
            <p className="skill-card card">Semantic UI</p>
            <p className="skill-card card">Element UI</p>
            <p className="skill-card card">Material Design</p>
            <p className="skill-card card">Gulp</p>
            <p className="skill-card card">Webpack</p>
            <p className="skill-card card">Web3.js</p>              
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-12 col-lg-5 skill-heading">
            <h3>Backend & Databases</h3>
          </div>
          <div className="col-md-12 col-lg-6 d-flex flex-row flex-wrap">
            <p className="skill-card card">Php</p>
            <p className="skill-card card">Laravel Framework</p>
            <p className="skill-card card">NodeJS</p>
            <p className="skill-card card">ExpressJS</p>
            <p className="skill-card card">MySQL</p>
            <p className="skill-card card">MongoDB</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-12 col-lg-5 skill-heading">
            <h3>SVN & Task Management</h3>
          </div>
          <div className="col-md-12 col-lg-6 d-flex flex-row flex-wrap">
            <p className="skill-card card">Git</p>
            <p className="skill-card card">Github</p>
            <p className="skill-card card">Bitbucket</p>
            <p className="skill-card card">GitLab</p>
            <p className="skill-card card">Jira</p>
            <p className="skill-card card">Asana</p>
            <p className="skill-card card">Zenhub</p>
            <p className="skill-card card">Clubhouse</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-12 col-lg-5 skill-heading">
            <h3>DevOps</h3>
          </div>
          <div className="col-md-12 col-lg-6 d-flex flex-row flex-wrap">
            <p className="skill-card card">Auto/Manual Deployment</p>
            <p className="skill-card card">Heroku</p>
            <p className="skill-card card">DeployHQ</p>
            <p className="skill-card card">Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;