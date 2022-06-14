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
        <div className="service-title d-flex flex-column ml-3">
            <h5 className="mb-0">title</h5>
            <p className='m-0'>name</p>
        </div>
        <div className="d-flex flex-column ml-5">
            <h5 className="service-status mb-0">Checklist submission details</h5>

            <span className="service-date mr-2 mb-0">
            <FontAwesomeIcon
                className="mr-2"
                icon={faCalendar}
            ></FontAwesomeIcon>
            date
            </span>
        </div>
        <div className="d-flex flex-column ml-3" style={{"text-align":"right",color:'black'}}>
            <h6 className="m-0">@name</h6>
            <h6 className='m-0'>Status</h6>
            <h6>Status update date</h6>
        </div>
        </Link>       
    );
};

export default ServicesList;