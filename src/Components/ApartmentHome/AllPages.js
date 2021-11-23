import React from 'react'
import HomePage from './HomePage';
import Nigeria from './Nigeria';
import Lagos from "./Lagos";
import Abuja from "./Abuja";
import OtherCity from "./OtherCity";
import Recently from "./Recently";
import Agent1 from './Agent1';
import RecentViewed from './RecentViewed';
import Footer from './Footer';


const AllPages = () => {
    return (
        <div>
            <HomePage/>
            <Nigeria/>
            <Lagos/>
             <Abuja/>
             <Agent1/>
            <OtherCity/>
             <Recently/>
            <RecentViewed/>
           
            <Footer/> 
        </div> 
    )
}

export default AllPages
