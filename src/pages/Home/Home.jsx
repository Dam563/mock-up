import React from "react";
import Leftsection from '../../components/Leftsection/Leftsection';
import Rightsection from '../../components/Rightsection/Rightsection';
import Middlesection from '../../components/Middlesection/Middlesection';
import './home.css';
import Navsection from "../../components/Navsection/Navsection";

const Home = () => {
  return (
    <div className="Home">
        <Navsection />
        <div className="maincontent">
            <Leftsection />
            <Middlesection />
            <Rightsection />
            </div> 
          </div>
  );
};

export default Home;
