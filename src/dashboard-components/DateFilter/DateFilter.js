import React, { useState } from "react";
import DatePicker from "react-datepicker";
import '../DateFilter/DateFilter.css'
const DateFilter = () => {
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
    return (
        <div>
        <div className="d-flex flex-row align-items-center">
        <DatePicker
          className="date-box"
          selected={startDate}
          dateFormat="dd-MM-yyyy"
          placeholderText="start date"
          onChange={(date) => {
            if (date !== null) {
              setStartDate(date);
              // console.log(date.toLocaleDateString());
              console.log(startDate)          
            } else {
              setStartDate(null);
            }
          }}
          isClearable
          scrollableMonthYearDropdown
        />
        <span className="ml-2">~</span>
        <DatePicker
          className="date-box ml-2"
          selected={endDate}
          dateFormat="dd-MM-yyyy"
          placeholderText="End date"
          minDate={startDate}
          onChange={(date) => {
            if (date !== null) {
              setEndDate(date);
              console.log(endDate)
              // console.log(date.toLocaleDateString());
            } else {
              setEndDate(null);
            }
          }}
          isClearable
        />
        
      </div>
        </div>
    );
};

export default DateFilter;