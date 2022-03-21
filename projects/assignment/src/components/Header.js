import React from "react";
import PropTypes from "prop-types";

import logo from "../assets/logo.png";

import "./Header.css";

const Header = ({ setLanguage }) => {
  // Set language based on dropdown selection
  const handleLocaleChange = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

  return (
    <div className="header">
      <img src={logo} />
      <select
        onChange={handleLocaleChange}
        className="localSelector"
        placeholder="Select Language"
      >
        <option value="en">English</option>
        <option value="ge">Germany</option>
      </select>
    </div>
  );
};

Header.propTypes = {
  setLanguage: PropTypes.func,
};

export default Header;
