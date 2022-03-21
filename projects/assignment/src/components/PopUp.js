import React from "react";
import PropTypes from "prop-types";

import mancalamix from "../assets/mancalamix.png";
import pubg from "../assets/pubg.png";
import superjewels from "../assets/superjewels.png";
import moleslayer from "../assets/moleslayer.png";

import "./Popup.css";

const Popup = ({ data, setModalOpen, locale }) => {
  const {
    name,
    region,
    monthlyPrice,
    halfYearlyPrice,
    yearlyPrice,
    popUpIcon,
  } = data;
  let campaignImg;

  switch (popUpIcon) {
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
      break;
  }

  return (
    <div className="popupWrapper">
      <div className="popup">
        <div className="popupTop">
          <img className="popupIcon" src={campaignImg} />
          <div className="headingContainer">
            <div>{name}</div>
            <div>{region}</div>
          </div>
        </div>
        <div className="priceHeading">{locale.pricing}</div>
        <div>
          <div className="priceRow">
            <div className="priceText">{locale.monthlyText}</div>
            <div>$ {monthlyPrice}</div>
          </div>
          <div className="priceRow">
            <div className="priceText">{locale.halfYearlyText}</div>
            <div>$ {halfYearlyPrice}</div>
          </div>
          <div className="priceRow">
            <div className="priceText">{locale.yearlyText}</div>
            <div>$ {yearlyPrice}</div>
          </div>
        </div>
        <div className="buttonWrapper">
          <div
            onClick={() => setModalOpen(false)}
            className="closeButton"
          >
            {locale.close}
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  setModalOpen: PropTypes.func,
  data: PropTypes.object,
};

export default Popup;
