import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import "../DateFilter/DateFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DateFilter = ({ handleStartDate, handleEndDate }) => {
  const [selectedStartDate,setSelectedStartDate ]=useState(null);
  const [selectedEndDate,setSelectedEndDate ]=useState(null);
  return (
    
      <div className="d-flex flex-row align-items-center">
      <div className="date-wrapper d-flex flex-row align-items-center">
        <DatePicker
          className="date-box"
          selected={selectedStartDate}
          dateFormat="dd-MM-yyyy"
          placeholderText="start date"
          onChange={(date) => {
            setSelectedStartDate(date);
            handleStartDate(date);
          }}
        
          scrollableMonthYearDropdown
        />
        <FontAwesomeIcon icon={faCalendar} className="calender-icon ml-1"/>
        </div>

        <span className="ml-2 ">~</span>
        <div className="date-wrapper d-flex flex-row align-items-center">
        <DatePicker
          className="date-box ml-2"
          selected={selectedEndDate}
          dateFormat="dd-MM-yyyy"
          placeholderText="End date"
          minDate={selectedStartDate}
          onChange={(date) => {
            setSelectedEndDate(date)
            handleEndDate(date);
          }}
      
        />
        
        <FontAwesomeIcon icon={faCalendar} className="calender-icon ml-1"/>
        
      </div>
    </div>
  );
};

export default DateFilter;
