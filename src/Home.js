import React from 'react';
import pic from './images/pic.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="logo-container">
          <img src={pic} alt="MetroRealAIty Logo" className="logo" />
        </div>
        <div className="intro">
          <h1 className="title">Welcome to Metrorealaity</h1>
          <p className="subtitle">Promoting Sustainable Living Solutions</p>
          <p className="description">
            Specializing in geothermal and solar-powered land development, custom constructions, and home automation. We offer free consultations for geothermal HVAC, land development, solar solutions, and home technology. Our services have been praised by customers for their innovative consultation services that transformed their spaces into energy-efficient havens.
          </p>
        </div>
      </div>
      <div className="services">
        <div className="service">
          <h2>Commercial Building Science & Investment</h2>
          <p>
            Realaityhomes is at the forefront of providing sustainable and cost-effective solutions in commercial construction, building rehabilitation, and investment insights for US commercial assets.
          </p>
        </div>
        <div className="service">
          <h2>Residential Building Science & Property Tech</h2>
          <p>
            At Realaityhomes, we're dedicated to sustainable living solutions, geothermal and solar-powered land development, custom constructions, and home automation.
          </p>
        </div>
      </div>
      <div className="case-studies">
        <h2>Case Studies</h2>
        <div className="case-study">
          <h3>Revitalizing a Historic Landmark</h3>
          <p>
            We took on the monumental task of restoring an iconic historic building, preserving its heritage while modernizing it for commercial use. Our sustainable solutions transformed this space into a thriving hub, attracting businesses, tourists, and boosting the local economy.
          </p>
        </div>
        <div className="case-study">
          <h3>Eco-Friendly Smart Homes</h3>
          <p>
            We turned conventional houses into eco-friendly smart homes using geothermal HVAC and solar power. Families now enjoy reduced energy bills and environmentally friendly living. Our custom automation solutions have added convenience and security to their lives.
          </p>
        </div>
      </div>
    </div>




  );
}

export default Home;
