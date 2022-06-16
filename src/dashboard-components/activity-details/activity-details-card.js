import React from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import checklist from "../../images/checklists.png";

export const ActivityDetailsCard = ({ name, date, title, status }) => {
  return (
    <div class="activitydetails-container d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-column justify-content-center">
        <img src={checklist} alt="" className="activity-details-image" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ml-3">
        <h5 className="activity-details-title">{title}</h5>
        <p className="m-0">{name}</p>
      </div>
      <div className="d-flex flex-column ml-5">
        <h5 className="activity-status m-0">{status}</h5>
        <span className="mr-2 activity-date">
          <FontAwesomeIcon className="mr-2" icon={faCalendar}></FontAwesomeIcon>
          {date}
        </span>
      </div>
    </div>
  );
};


