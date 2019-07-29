import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="section container container--large portfolio" id="portfolio">
      <div className="section__heading text-center">
        <h1 className="text-uppercase">My Portfolio</h1>
      </div>
      <div className="section__content">
        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">FreightTrust</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p>FreightTrust is marketplace for freight companies which uses Ethereum smart contracts to store shipping documents on blockchain e.g. Bills of lading.</p>
              <p className="mb-4">I have worked on the admin dashboard where companies register themselves, manage team members and get a license using ERC20 tokens to get listed on marketplace.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">VueJS</p>
                <p className="skill-card card">ElementUI</p>
                <p className="skill-card card">Web3.js</p>
                <p className="skill-card card">Metamask</p>
                <p className="skill-card card">Php</p>
                <p className="skill-card card">Laravel Framework</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">Enterprise Wallet</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">An Ethereum based desktop wallet solely developed by me for company’s client that allows user to check ethereum network stats as well as current account stats, send/receive ethers, check transactions, maintain address book and save DApps as bookmarks.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">VueJS</p>
                <p className="skill-card card">ElementUI</p>
                <p className="skill-card card">Web3.js</p>
                <p className="skill-card card">Metamask</p>
                <p className="skill-card card">Electron</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">CoinIgniter</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">A company’s product that allow user to create own ICO / Sweepstake based on ethereum network. I worked mainly on admin dashboard, public sites for ICO/Sweepstake and micro-site.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">VueJS</p>
                <p className="skill-card card">ElementUI</p>
                <p className="skill-card card">Web3.js</p>
                <p className="skill-card card">Metamask</p>
                <p className="skill-card card">Php</p>
                <p className="skill-card card">Laravel Framework</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">Top Alarm Companies</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">Marketing site developed for IRELO that provide top 4 security alarm companies with a comparison tool for user to filter based on requirements.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">VueJS</p>
                <p className="skill-card card">Bootstap</p>
                <p className="skill-card card">Segment</p>
                <p className="skill-card card">Google Analytics</p>
                <p className="skill-card card">Fullstory</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">Top Moving</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">Web and mobile app developed for IRELO that generate leads for shipment providers and also provide the best shipping quotes to user based on home/apartment/office movement and pickup/delivery locations.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">VueJS</p>
                <p className="skill-card card">Bootstap</p>
                <p className="skill-card card">Segment</p>
                <p className="skill-card card">Google Analytics</p>
                <p className="skill-card card">Fullstory</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">Car Shipping Quote</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">Mobile app developed for IRELO that generate leads for car shipmen providers and provide the best car shipment quotes to user based on pickup / delivery locations.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">Ionic Framework</p>
                <p className="skill-card card">Angular</p>
                <p className="skill-card card">Bootstap</p>
                <p className="skill-card card">Segment</p>
                <p className="skill-card card">Google Analytics</p>
                <p className="skill-card card">Fullstory</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">Tecademics</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">Tecademics is a US based client that provides digital marketing and training services. I have worked on their digital content and members management platform. In this project i learned how to work with distributed teams and collaborate on same application.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">Angular</p>
                <p className="skill-card card">Angular Material</p>
                <p className="skill-card card">Semantic UI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">HireNinja</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">Tecademics is a US based client that provides digital marketing and training services. I have worked on their digital content and members management platform. In this project i learned how to work with distributed teams and collaborate on same application.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">Angular</p>
                <p className="skill-card card">Semantic UI</p>
                <p className="skill-card card">Php</p>
                <p className="skill-card card">Laravel Framework</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-item d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-lg-5">
            <h2 className="text-left">Anhance</h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="content">
              <p className="mb-4">Anhance is a digital content management platform with features like affiliate marketing, members management and custom domains. As my first professional experience and working as frontend developer, I learned how to design the architecture of web apps and how to divide app into reusable small components.</p>
              <div className="d-flex flex-row flex-wrap">
                <p className="skill-card card">Angular</p>
                <p className="skill-card card">Semantic UI</p>
                <p className="skill-card card">Php</p>
                <p className="skill-card card">Laravel Framework</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;