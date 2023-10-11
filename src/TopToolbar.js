import React from "react";
import { Link } from 'react-router-dom';
import './TopToolbar.css';

function TopToolbar() {
  return (
    <div className="top-toolbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          Realaityhomes
        </Link>
      </div>
      <div className="tabs">
        <Link to="/" className="tab-link">Home</Link>
        <Link to="/about" className="tab-link">About Us</Link>
        <Link to="/contact" className="tab-link">Contact</Link>
      </div>
    </div>
  );
}

export default TopToolbar;
