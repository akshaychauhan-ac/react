import React from "react";
import PropTypes from "prop-types";

import "./TabBar.css";

const TabBar = ({ activeTab, setActiveTab, locale }) => {
  return (
    <div className="tabBar">
      <div
        className={`tabItem ${activeTab === "upcoming" && "active"}`}
        onClick={() => setActiveTab("upcoming")}
      >
        {locale.upcoming}
      </div>
      <div
        className={`tabItem ${activeTab === "live" && "active"}`}
        onClick={() => setActiveTab("live")}
      >
        {locale.live}
      </div>
      <div
        className={`tabItem ${activeTab === "past" && "active"}`}
        onClick={() => setActiveTab("past")}
      >
        {locale.past}
      </div>
    </div>
  );
};

TabBar.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

export default TabBar;
