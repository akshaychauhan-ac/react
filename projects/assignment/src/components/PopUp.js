import React from "react";
import PropTypes from "prop-types";
import "./Popup.css";

import mancalamix from "../assets/mancalamix.png";
import pubg from "../assets/pubg.png";
import superjewels from "../assets/superjewels.png";
import moleslayer from "../assets/moleslayer.png";

const Popup = ({ data, setModalOpen, locale }) => {
  const {
    name,
    region,
    monthlyPrice,
    HalfYearlyPrice,
    yearlyPrice,
    popUpIcon,
  } = data;
  let popupImage;

  switch (popUpIcon) {
    case "mancalamix":
      popupImage = mancalamix;
      break;
    case "pubg":
      popupImage = pubg;
      break;
    case "superjewels":
      popupImage = superjewels;
      break;
    case "moleslayer":
      popupImage = moleslayer;
      break;
    default:
      popupImage = "";
      break;
  }

  return (
    <div className="popupWrapper">
      <div className="popup">
        <div className="popupTop">
          <img className="popUp_icon" src={popupImage} />
          <div className="popUp_headingcontainer">
            <div className="popUp_name">{name}</div>
            <div className="popUp_country">{region}</div>
          </div>
        </div>
        <div className="popUp_priceHeading">{locale.pricing}</div>
        <div className="popUp_pricing">
          <div className="popUp_pricingRow">
            <div className="popUp_priceText">{locale.monthlyText}</div>
            <div className="popUp_pricingvalue">$ {monthlyPrice}</div>
          </div>
          <div className="popUp_pricingRow">
            <div className="popUp_priceText">{locale.halfYearlyText}</div>
            <div className="popUp_pricingvalue">$ {HalfYearlyPrice}</div>
          </div>
          <div className="popUp_pricingRow">
            <div className="popUp_priceText">{locale.yearlyText}</div>
            <div className="popUp_pricingvalue">$ {yearlyPrice}</div>
          </div>
        </div>
        <div className="popUp_button">
          <div
            onClick={() => setModalOpen(false)}
            className="popUp_closebutton"
          >
            {locale.close}
          </div>
        </div>
      </div>
    </div>
  );
};

//using proptypes for props type safety(gets removed in production build)
Popup.propTypes = {
  setModalOpen: PropTypes.func,
  data: PropTypes.object,
};

export default Popup;
