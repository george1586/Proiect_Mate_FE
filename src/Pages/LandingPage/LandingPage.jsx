import React, { useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import './landingPage.css';
import Button from '../../Components/Button/Button.jsx';
import LandingPage1 from '../../Components/LandingPage1/LandingPage1.jsx';
import LandingPage2 from '../../Components/LandingPage2/LandingPage2.jsx';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <LandingPage1 />
      <LandingPage2 />
    </>
  );
};

export default LandingPage;
