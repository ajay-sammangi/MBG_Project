import React from 'react';
import '../services-component/Services-list.css';
import checklist from '../images/checklists.png'
import {Link} from 'react-router-dom'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Home from '../Routes/Home/Home';
// import data from '../../data.json';
const ServicesList = () => {

    return (
        <Link to="/form" class="service-list-container d-flex flex-row justify-content-between align-items-center my-2">
        <div>
            <img
            src={checklist}
            alt=""
            className="service-details-image"
            />
        </div>
        <div className="d-flex flex-column ml-3">
            <h5 className="">title</h5>
            <p className='m-0'>name</p>
        </div>
        <div className="d-flex flex-column ml-5">
            <h5 className="service-status">Checklist submission details</h5>

            <span className="mr-2 service-date">
            <FontAwesomeIcon
                className="mr-2"
                icon={faCalendar}
            ></FontAwesomeIcon>
            date
            </span>
        </div>
        <div className="d-flex flex-column ml-3" style={{"text-align":"right"}}>
            <h6 className="assignee">@name</h6>
            <h6>Status</h6>
            <h6>Status update date</h6>
        </div>
        </Link>       
    );
};

export default ServicesList;