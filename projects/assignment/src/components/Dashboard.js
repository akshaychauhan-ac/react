import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TabBar from "./TabBar";
import CampaignList from "./CampaignList";
import { getJsonURL } from "../apiConfig";
import { getRequest } from "../utils/apiCalls";
import "./Dashboard.css";

const DashBoard = ({ locale }) => {
  //using state to store the active tab from upcoming/live/past
  let [activeTab, setActiveTab] = useState("upcoming");
  let [tableData, setData] = useState([]);

  //adding api call to fetch json data on mount
  useEffect(() => {
    if (localStorage.getItem("campaignData")) {
      setData(JSON.parse(localStorage.getItem("campaignData")));
    } else {
      getRequest(getJsonURL).then((res) => {
        setData(res.data.data);
        localStorage.setItem("campaignData", JSON.stringify(res.data.data));
      });
    }
    return () => {};
  }, []);

  let tabsData = {
    upcoming: [],
    past: [],
    live: [],
  };
  //logic to create data on the basis of live/upcoming/past
  for (let i = 0; i < tableData.length; i++) {
    const diffTime = new Date(tableData[i].createdOn) - new Date();
    const diffTimeAbs = Math.abs(diffTime);
    const diffDays = diffTimeAbs / (1000 * 60 * 60 * 24);
    if (diffDays > 1 && diffTime < 0) {
      tabsData["past"].push(tableData[i]);
    } else if (diffDays > 0 && diffTime > 0) {
      tabsData["upcoming"].push(tableData[i]);
    } else {
      tabsData["live"].push(tableData[i]);
    }
  }
  return (
    <div className="dashboard">
      <h1>{locale.manage}</h1>
      <TabBar
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        locale={locale}
      />
      <CampaignList
        data={tabsData[activeTab]}
        tableData={tableData}
        activeTab={activeTab}
        setData={setData}
        locale={locale}
      />
    </div>
  );
};

DashBoard.propTypes = {
  locale: PropTypes.object,
};

export default DashBoard;
