import React from "react";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import underReview from '../../images/UnderReview.png'
import "../status-card/status-card.css";
import "bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statuscard = ({ title, count }) => {
  return (
    <div className="status-body-container">
      <div className="d-flex flex-row justify-content-between">
        <div className="status-card-section d-flex flex-row align-items-center">
          <div className="status-img-container">
            <img src={underReview}  alt="" className="status-image" />
          </div>
          <div className="status-card-details">
            <p className="m-0">{title}</p>
            <h4 className="status-count">{count}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statuscard;
