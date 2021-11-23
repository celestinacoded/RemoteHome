import React from 'react'
import AllPages from './Components/ApartmentHome/AllPages';
import Main from './Components/Auth/main';
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from './Components/TinaDetail/LandingPage';
import HomeDetail from './Components/TobiDetails/HomeDetail';
import BuyHouse from "./Components/BuyHouse/Buy";
import RentHome from "./Components/RentHome/Rent";
import AgentForm from './Components/TobiDetails/AgentForm';
import  Morge from './Components/ApartmentHome/Morge';
// import { Register } from './Components/SellHomes/Register';






const App = () => {
  return (
    <div>
      <Router>
        <Header />
        
        <Routes>
        <Route path="/home" element={<AllPages/> }/>
          <Route path="/user" element={<Main />} />
          <Route path="/detail" element={<HomeDetail />} />
          <Route path="/buy" element={<BuyHouse />} />
          <Route path="/rent" element={< RentHome/>} />
          <Route path="/form" element={< AgentForm/>} />
          <Route path="/moge" element={< Morge/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App
