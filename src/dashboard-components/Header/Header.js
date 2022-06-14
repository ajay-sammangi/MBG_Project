// import data from '../../data.json';
import "../Header/Header.css";
import "react-datepicker/dist/react-datepicker.css";
import DateFilter from "../DateFilter/DateFilter";
// import 'bootstrap';

const Header = ({ handleStartDate, handleEndDate }) => {
  return (
    <div className="header">
      <div>
        <h3>Dashboard</h3>
      </div>
      <DateFilter
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
      />
    </div>
  );
};

export default Header;
