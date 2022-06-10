import React from 'react';
import Sidemenu from '../../dashboard-components/Sidemenu/Sidemenu';
import ServicesList from '../../services-component/Services-list';
import DateFilter from '../../dashboard-components/DateFilter/DateFilter';
import '../Services/Services.css'

const Services = () => {
    return (
      <div className="d-flex flex-row">
        <div>
          <Sidemenu />
        </div>
        <div className="wrapper ml-2 mr-2">
          <div className="header">
            <div>
              <h3>Services</h3>
            </div>
            <DateFilter />
          </div>
          <div className='my-3 ml-4 mr-4'>
          <ServicesList />
          </div>
        </div>
      </div>
    );
};

export default Services;