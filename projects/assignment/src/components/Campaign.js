import React, { useState, useEffect } from "react";
import TabBar from "./TabBar";
import CampaignList from "./CampaignList";
import PropTypes from "prop-types";
import { mockData as campaigns } from "../mock";

const Campaign = ({ locale }) => {
  let [activeTab, setActiveTab] = useState("upcoming");
  let [tableData, setTableData] = useState([]);
  let campaignList = {
    upcoming: [],
    past: [],
    live: [],
  };

  useEffect(() => {
    // localStorage can be useful when we make API call and need to store that data.
    if (localStorage.getItem("campaignList")) {
      setTableData(JSON.parse(localStorage.getItem("campaignList")));
    } else {
      setTableData(campaigns.data);
      localStorage.setItem("campaignList", JSON.stringify(campaigns.data));
    }
    return () => {};
  }, []);

  // Filter campaign data based on tab selection (upcoming/live/past)
  for (let i = 0; i < tableData.length; i++) {
    const diffTime = new Date(tableData[i].createdOn) - new Date();
    const diffTimeAbs = Math.abs(diffTime);
    const diffDays = diffTimeAbs / (1000 * 60 * 60 * 24);

    if (diffDays > 1 && diffTime < 0) {
      campaignList["past"].push(tableData[i]);
    } else if (diffDays > 0 && diffTime > 0) {
      campaignList["upcoming"].push(tableData[i]);
    } else {
      campaignList["live"].push(tableData[i]);
    }
  }

  return (
    <div style={{margin: "0 10%"}}>
      <h1 style={{color: "#2b416c"}}>{locale.manage}</h1>
      <TabBar
        locale={locale}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CampaignList
        locale={locale}
        data={campaignList[activeTab]}
        tableData={tableData}
        activeTab={activeTab}
        setTableData={setTableData}
      />
    </div>
  );
};

Campaign.propTypes = {
  locale: PropTypes.object,
};

export default Campaign;
