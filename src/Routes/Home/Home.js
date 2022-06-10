import '../../App.css';
import Sidemenu from '../../dashboard-components/Sidemenu/Sidemenu'
import Header from '../../dashboard-components/Header/Header';
import Statuscard from '../../dashboard-components/status-card/status-card';
import ActivityDetails from '../../dashboard-components/activity-details/activity-details';
function Home() {
  return (
    <div className="App">
      <Sidemenu />
      <div className="wrapper ml-2 mr-2">
        <Header />
        <div className="status-card-container ">
          <div className="status-card">
            <h4 className="pl-2">Taxation</h4>
            <Statuscard />
          </div>
          <div className="status-card ml-4">
            <h4 className="pl-2">Legal</h4>
            <Statuscard />
          </div>
        </div>
        <div className='ml-2 mr-2'> 
        <h4>Recent Activity</h4>
        <div className='activity-details-wrapper'>
          <ActivityDetails />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
