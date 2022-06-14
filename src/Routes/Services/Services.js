import React from 'react';
import Sidemenu from '../../dashboard-components/Sidemenu/Sidemenu';
import ServicesList from '../../services-component/Services-list';
import DateFilter from '../../dashboard-components/DateFilter/DateFilter';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Services/Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Services = () => {
    return (
      <div className="d-flex flex-row">
        <div>
          <Sidemenu />
        </div>
        <div className="service-wrapper ml-2 mr-2">
          <div className="service-header">
            <div>
              <h3>Services</h3>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="search-div d-flex flex-row align-items-center mr-2">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="search"
                  className="search-input"
                  placeholder="#Service id, #Customer number, Name"
                  // onChange={
                    // (e)=>textFilter(e)
                  // }
                />
              </div>
              <div className="mr-2">
                <select>
                  <option>All Executors</option>
                  <option>Executor 1</option>
                  <option>Executor 2</option>
                  <option>Executor 3</option>
                </select>
              </div>
              <div className="mr-2">
                <select>
                  <option>All Status</option>
                  <option>Unassigned</option>
                  <option>Under Review</option>
                  <option>InProgress</option>
                  <option>Completed</option>
                </select>
              </div>
              <DateFilter />
            </div>
          </div>
          <div className="my-3 ml-4 mr-4">
            <ServicesList />
          </div>
        </div>
      </div>
    );
};

export default Services;