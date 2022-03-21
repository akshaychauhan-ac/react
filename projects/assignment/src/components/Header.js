import React from "react";
import "../css/header.css";
import PropTypes from "prop-types";

const Header = ({ setLanguage }) => {
  const handleLocaleChange = (e) => {
    //prevent dfault behaviour of onchange
    e.preventDefault();
    //updating language state to current selected
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
//using proptypes for props type safety(gets removed in production build)
Header.propTypes = {
  setLanguage: PropTypes.func,
};
export default Header;
