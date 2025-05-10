import React, { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../styles/Matching.css';

import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

import RBGexplainer from '../components/RBGexplain';

import person from '../assets/person.svg';
import duplicate from '../assets/copy.svg'

import { true_random, part_random } from '../api/queue';

const Matching: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { random, start_date, end_date, 
    time_slot, genre, instrument} = location.state;

    useEffect(() => {
        if (random === "true") {
            true_random(start_date, end_date, time_slot, genre, instrument);
        } else if (random === "part") {
            part_random(start_date, end_date, time_slot, genre, instrument);
        }
    });

    const handleCancel = () => {
        navigate('/home');
    };

  return (
    <div className="Home">
      <Header/>
      <Background/>
      <div className='Home-container'>
        <RBGexplainer/>
        <div className='content'>
          <div className='blue-bottom-line'></div>
          <div id='queue_title'>
          <h1>진행중인 매칭</h1>
          </div>
          <div className='show_queue'>
            <div className='matching_room'>
                <h2>{genre} 밴드 매칭</h2>
                <div className='duplicate_container'>
                    <img src={duplicate} alt="" id='img_duplicate'/>
                    <p>매칭 코드 : CAFEBEBE</p>
                </div>
            </div>
            <div className='matched_num_picture'>
                {(() => {
                    const listItems = [];
                    for (let i = 0; i < 5; i++) {
                        listItems.push(<img src={person} alt="" className={`${i<3?'blue-':''}person`}/>);
                    }
                    return listItems;
                })()}
            </div>
            <div className='matched_num_text'>
                <h3>매칭 진행중... (3 / 5)</h3>
            </div>
            <div className='cancel' onClick={handleCancel}>
                <h3>매칭 중단하기</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Matching;
