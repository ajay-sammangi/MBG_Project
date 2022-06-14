import React from "react";
import "../activity-details/activity-details.css";
import checklist from "../../images/checklists.png";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityDetails = ({ data }) => {
  return (
    data?.length > 0 &&
    data.map((item) => {
      return (
        <div class="activitydetails-container d-flex flex-row align-items-center my-2">
          <div className="d-flex flex-column justify-content-center">
            <img src={checklist} alt="" className="activity-details-image" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center ml-3">
            <h5 className="m-0">{item.title}</h5>
            <p className="m-0">{item.name}</p>
          </div>
          <div className="d-flex flex-column ml-5">
            <h5 className="activity-status m-0">{item.status}</h5>
            <span className="mr-2 activity-date">
              <FontAwesomeIcon
                className="mr-2"
                icon={faCalendar}
              ></FontAwesomeIcon>
              {item.date}
            </span>
          </div>
        </div>
      );
    })
  );
};

export default ActivityDetails;
