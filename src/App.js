// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
// import Sidemenu from './dashboard-components/Sidemenu/Sidemenu';
import Services from './Routes/Services/Services';
import Form from './Routes/Form/Form.js';

const App=() =>{
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='form' element={<Form />} />
      
    </Routes> 
  );
}

export default App;
