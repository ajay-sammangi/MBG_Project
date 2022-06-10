import React from 'react';
import '../activity-details/activity-details.css';
import checklist from '../../images/checklists.png';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data.json';
const ActivityDetails = () => {
    return (
        data.map((item)=>{
            return (
              <div class="activitydetails-container d-flex flex-row my-2">
                <div>
                  <img
                    src={checklist}
                    alt=""
                    className="activity-details-image"
                  />
                </div>
                <div className="d-flex flex-column ml-3">
                  <h5 className="">{item.title}</h5>
                  <p>{item.name}</p>
                </div>
                <div className="d-flex flex-column ml-5">
                  <h5 className="activity-status">{item.status}</h5>
                {
                    //   <span>{item.id}</span>
                    }
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