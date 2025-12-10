import React from "react";


const Navbar = () => {
  return (
    <header className="nav-wrapper">
      {/* thin red line on top */}
      <div className="nav-top-border" />

      <nav className="nav-bar">
        {/* Left side – you can add logo here later */}
        <div className="nav-left">
          {/* <span className="nav-logo">MyGarage</span> */}
        </div>

        {/* Center menu */}
        <ul className="nav-menu">
          <li className="nav-item dropdown">
            VEHICLE SERVICES <span className="nav-arrow">▾</span>
          </li>
          <li className="nav-item">COUPONS</li>
          <li className="nav-item dropdown">
            FLEET ADVANTAGE <span className="nav-arrow">▾</span>
          </li>
          <li className="nav-item dropdown">
            ABOUT US <span className="nav-arrow">▾</span>
          </li>
          <li className="nav-item">CAREERS</li>
        </ul>

        {/* Right side icons */}
        <div className="nav-right">
          <button className="nav-link-icon">
            <span className="nav-icon">📍</span>
            <span>Locations</span>
          </button>
          <button className="nav-link-icon">
            <span className="nav-icon">🔍</span>
            <span>Search</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
