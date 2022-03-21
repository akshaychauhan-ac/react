import React, { useState, memo, Suspense } from "react";
import PropTypes from "prop-types";
import popUp from "../assets/Bitmap1.png";
import file from "../assets/file.png";
import calendar from "../assets/calendar.png";
import stats from "../assets/statistics-report.png";
import Price from "../assets/Price.png";
import mancalamix from "../assets/mancalamix.png";
import pubg from "../assets/pubg.png";
import superjewels from "../assets/superjewels.png";
import moleslayer from "../assets/moleslayer.png";

import "react-datepicker/dist/react-datepicker.css";
import "./CampaignList.css";

// React lazy to dynamically load component (for page performance/reduce TTFB)
const Popup = React.lazy(() => import("./Popup"));
const DatePicker = React.lazy(() => import("react-datepicker"));

const CampaignList = ({ data, setTableData, tableData, locale, activeTab }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [datePicker, setDatePicker] = useState({});
  const [popupData, setPopupData] = useState({});
  const toggleDatePicker = (id) => {
    setDatePicker({ ...datePicker, [id]: !datePicker[id] });
  };

  // Update data on date change
  const updateData = (date, rowdata) => {
    let newRowData = { ...rowdata, createdOn: date.toDateString() };
    let newData = tableData.map((data) => {
      if (data.name !== newRowData.name) return data;
      else {
        return newRowData;
      }
    });
    setTableData(newData);
    setDatePicker({ ...datePicker, [rowdata.id]: false });
  };

  // Handle popup
  const handlePricingView = (rowdata) => {
    setPopupData(rowdata);
    setModalOpen(true);
  };

  // Generate table date
  const tableRows = data.map((rowdata, i) => {
    const diffTime = new Date(rowdata.createdOn) - new Date();
    const diffDays = Math.abs(diffTime) / (1000 * 60 * 60 * 24);
    const finalDays = diffTime > 0 ? Math.ceil(diffDays) : Math.floor(diffDays);
    let campaignImg;

    switch (rowdata.popUpIcon) {
      case "mancalamix":
        campaignImg = mancalamix;
        break;
      case "pubg":
        campaignImg = pubg;
        break;
      case "superjewels":
        campaignImg = superjewels;
        break;
      case "moleslayer":
        campaignImg = moleslayer;
        break;
      default:
        campaignImg = "";
    }
    return (
      <tr id={"row" + i + 1} className="data-row">
        <td>
          <div className="rowItemWrapper">
            <div className="dark-text">
              {new Date(rowdata.createdOn).toDateString()}
            </div>
            {activeTab === "upcoming" && (
              <div className="campaign-status">{finalDays} days ahead</div>
            )}
            {activeTab === "past" && (
              <div className="campaign-status">{finalDays} days before</div>
            )}
            {activeTab === "live" && (
              <div className="campaign-status">Ongoing</div>
            )}
          </div>
        </td>
        <td className="campaignColumn">
          <div className="rowItemWrapper" style={{display: "flex"}}>
            <img className="rowCampaignIcon" src={campaignImg} />
            <div className="rowCampaignNameWrapper">
              <div className="rowCampaignName">{rowdata.name}</div>
              <div className="rowCampaignCountry">{rowdata.region}</div>
            </div>
          </div>
        </td>
        <td className="viewColumn">
          <div className="rowItemWrapper">
            <div style={{height: "2.5rem"}}>
              <img className="icon equalHeightWidth" src={Price} />
              <span className="adjust-text pricingButton" onClick={() => handlePricingView(rowdata)}>{locale.viewPricing}</span>
            </div>
          </div>
        </td>
        <td className="actionColumn">
          <div className="rowItemWrapper" style={{display: "flex"}}>
            <div style={{height: "2.5rem", marginRight: "1rem"}}>
              <img className="icon" src={file} />
              <span className="adjust-text"> CSV</span>
            </div>
            <div style={{height: "2.5rem", marginRight: "1rem"}}>
              <img className="icon" src={stats} />
              <span className="adjust-text">{locale.report}</span>
            </div>
            <div className="cursor" style={{height: "2.5rem"}}>
              <img
                onClick={() => toggleDatePicker(rowdata.id)}
                className="icon equalHeightWidth"
                src={calendar}
              />
              <span className="adjust-text">{locale.schedule}</span>
              {datePicker[rowdata.id] && (
                <Suspense fallback={<div>Loading...</div>}>
                  <DatePicker
                    selected={new Date()}
                    onChange={(date) => updateData(date, rowdata)}
                    dateFormat="MMMM d, yyyy"
                    popperPlacement="bottom-start"
                    popperClassName="date-popup"
                  />
                </Suspense>
              )}
            </div>
          </div>
        </td>
      </tr>
    );
  });
  return (
    // optional chaining to check for data emptiness
    data?.length ? (
      <div className="table-container">
        <table id="main-table">
          <tbody>
            <tr id="row0">
              <td id="cell0-0" className="columnTitle">{locale.date}</td>
              <td id="cell0-1" className="columnTitle">{locale.campaign}</td>
              <td id="cell0-2" className="columnTitle">{locale.view}</td>
              <td id="cell0-3" className="columnTitle" style={{ width: "40%" }}>
                {locale.actions}
              </td>
            </tr>
            {tableRows}
          </tbody>
        </table>

        {isModalOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <Popup
              setModalOpen={setModalOpen}
              data={popupData}
              locale={locale}
            />
          </Suspense>
        )}
      </div>
    ) : (
      <div className="emptyHeadline">{locale.noData}</div>
    )
  );
};

CampaignList.propTypes = {
  data: PropTypes.array,
  setTableData: PropTypes.func,
};

// memo is used to prevent unneccessary re-rendering of the component
export default memo(CampaignList, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
