import React, { MouseEventHandler, ReactElement, useEffect, useState } from 'react';

import '../styles/Home.css';

import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

import RBGexplainer from '../components/RBGexplain';

const Matching: React.FC = () => {
  return (
    <div className="Home">
      <Header/>
      <Background/>
      <div className='Home-container'>
        <RBGexplainer/>
        <div className='content'>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Matching;
