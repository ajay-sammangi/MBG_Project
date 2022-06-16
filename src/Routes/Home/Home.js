import { useEffect, useState } from "react";
import "../../App.css";
import "../Home/Home.css";
import Sidemenu from "../../dashboard-components/Sidemenu/Sidemenu";
import Header from "../../dashboard-components/Header/Header";
import Statuscard from "../../dashboard-components/status-card/status-card";
import ActivityDetails from "../../dashboard-components/activity-details/activity-details";
import JSON_DATA from "../../data";
import moment from "moment";

const today = moment("01/06/2022", "DD/MM/YYYY").format("DD/MM/YYYY");
const tommorow = moment().add(1, "days").format("DD/MM/YYYY");

console.log("check_1", today, tommorow);

function Home() {
  const [data, setData] = useState([...JSON_DATA]);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tommorow);

  const handleStartDate = (date) => {
    setStartDate(moment(date).format("DD/MM/YYYY"));
    console.log("startDate==>", moment(date).format("DD/MM/YYYY"));
  };

  const handleEndDate = (date) => {
    setEndDate(moment(date).format("DD/MM/YYYY"));
    console.log("endDate==>", moment(date).format("DD/MM/YYYY"));
    // console.log(endDate);
  };

  useEffect(() => {
    // debugger;
    const filtered_data = JSON_DATA.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
    setData(filtered_data);
  }, [startDate, endDate]);

  const dummyJson = [
    { title: "unassigned", count: "12" },
    { title: "assigned", count: "12" },
    { title: "completed", count: "12" },
    { title: "incomplete", count: "12" },
  ];
  return (
    <div className="App">
      <Sidemenu />
      <div className="home-wrapper pl-2 pr-2">
        <Header
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
        />
        <div className="status-card-container d-flex flex-row justify-content-between">
          <div className="status-card d-flex flex-column">
            <div>
            <h5 className="status-card-heading mt-2">Taxation</h5>
            </div>
            <div className="status-wrapper">
              {dummyJson.map((task) => (
                <Statuscard title={task.title} count={task.count} />
              ))}
            </div>
          </div>
          <div className="status-card ml-4">
          <div>
          
            <h5 className="status-card-heading mt-2">Legal</h5>
            </div>
            <div className="status-wrapper">
              {dummyJson.map((task) => (
                <Statuscard title={task.title} count={task.count} />
              ))}
            </div>
          </div>
        </div>
        <div className="ml-2 mr-2">
          <h5>Recent Activity</h5>
          <div className="activity-details-wrapper">
            <ActivityDetails data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
