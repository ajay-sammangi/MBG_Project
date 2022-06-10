// import data from '../../data.json';
import "../Header/Header.css";
import "react-datepicker/dist/react-datepicker.css";
import DateFilter from "../DateFilter/DateFilter";
// import 'bootstrap';

const Header = () => {
  
  // const filtered_date=data.filter(dateFilter);
  //             function dateFilter(item){
  //               return item.date>=startDate && item.date<=endDate;
  //             }
  //             // console.log(filtered_date);
  return (
    <div className="header">
      <div>
        <h3>Dashboard</h3>
      </div>
      <DateFilter />
      
    </div>
  );
};

export default Header;
