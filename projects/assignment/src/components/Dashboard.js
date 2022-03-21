import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TabBar from "./TabBar";
import CampaignList from "./CampaignList";
import { mockData as campaigns } from "../mock";

import "./Dashboard.css";

const Dashboard = ({ locale }) => {
  let [activeTab, setActiveTab] = useState("upcoming");
  let [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("campaignData")) {
      setTableData(JSON.parse(localStorage.getItem("campaignData")));
    } else {
      setTableData(campaigns.data);
      localStorage.setItem("campaignData", JSON.stringify(campaigns.data));
    }
    return () => {};
  }, []);

  let campaignData = {
    upcoming: [],
    past: [],
    live: [],
  };

  // Filter campaign data based on tab selection (upcoming/live/past)
  for (let i = 0; i < tableData.length; i++) {
    const diffTime = new Date(tableData[i].createdOn) - new Date();
    const diffTimeAbs = Math.abs(diffTime);
    const diffDays = diffTimeAbs / (1000 * 60 * 60 * 24);

    if (diffDays > 1 && diffTime < 0) {
      campaignData["past"].push(tableData[i]);
    } else if (diffDays > 0 && diffTime > 0) {
      campaignData["upcoming"].push(tableData[i]);
    } else {
      campaignData["live"].push(tableData[i]);
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
        data={campaignData[activeTab]}
        tableData={tableData}
        activeTab={activeTab}
        setTableData={setTableData}
        locale={locale}
      />
    </div>
  );
};

Dashboard.propTypes = {
  locale: PropTypes.object,
};

export default Dashboard;
