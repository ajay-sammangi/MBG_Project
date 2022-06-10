import React from 'react';
import clipboard from '../../images/clipboard.png';
import '../status-card/status-card.css';
import 'bootstrap';
const Statuscard = () => {
    return (
      <div className='container-fluid'>
        <div className="d-flex flex-row">
          <div className="status-card-section d-flex flex-row justify-content-center">
            <img src={clipboard} alt="" className="status-img" />
            <div className="">
              <div className='ml-2'>Unassigned</div>
              <div className="status-count">1</div>
            </div>
          </div>
          <div className="status-card-section d-flex flex-row justify-content-center">
            <img src={clipboard} alt="" className="status-img" />
            <div className="">
              <div className='ml-2'>Under review</div>
              <div className="status-count">1</div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="status-card-section d-flex flex-row justify-content-center">
            <img src={clipboard} alt="" className="status-img" />
            <div className="">
              <div className='ml-2'>Inprogress</div>
              <div className="status-count">1</div>
            </div>
          </div>
          <div className="status-card-section d-flex flex-row justify-content-center">
            <img src={clipboard} alt="" className="status-img" />
            <div className="">
              <div className='ml-2'>Completed</div>
              <div className="status-count">1</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Statuscard;