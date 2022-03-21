import React from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ setLanguage }) => {
  const handleLocaleChange = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  return (
    <div className="header">
      <img src="" />
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
