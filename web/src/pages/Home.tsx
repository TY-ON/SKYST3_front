import React, { MouseEventHandler, ReactElement, useEffect, useState } from 'react';

import main_img from '../assets/main.png';

import '../styles/Home.css';

import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

import SettingRandom, { ContentProp } from '../components/Setting';

const Home: React.FC = () => {
  const [popup_true_random, set_popup_true_random] = useState(false);
  const [popup_part_random, set_popup_part_random] = useState(false);


  const onClickHandler_tr = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    set_popup_true_random(!popup_true_random);
    set_popup_part_random(false);
  }

  const onClickHandler_pr = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    set_popup_true_random(false);
    set_popup_part_random(!popup_part_random);
  }
  
  return (
    <div className="Home">
      <Header/>
      <Background/>
      <div className='Home-container'>
        <div className='title'>
            <h2>내 취향에 맞는 밴드 생성기</h2>
            <h1>Random Band Generator</h1>
        </div>
        <div className='img'>
            <img src={main_img} id='main_img'/>
        </div>
        <div className='content'>
          <div className='blue-round-box' onClick={onClickHandler_tr}>
              True Random
          </div>
          { popup_true_random?<SettingRandom tooltip="포지션 완전 랜덤"/>:""}
          <div className='blue-round-box' onClick={onClickHandler_pr}>
              Part Random
          </div>
          { popup_part_random?<SettingRandom tooltip="포지션 완전 랜덤"/>:""}
          <div className='blue-bottom-line'></div>
          <h1>RBG 이용 방법</h1>
          <div className='blue-round-box'>
            장르 선택 후 매칭 시작!
            <p>TRBG : 포지션 완전 랜덤 / RBG : 포지션 지정</p>
          </div>
          <div className='blue-triangle'></div>
          <div className='blue-round-box'>
            합주 장소 / 일정 통합 예약
            <p>합주 장소 지정부터 합주 약속, 단체 톡방 생성 까지</p>
          </div>
          <div className='blue-triangle'></div>
          <div className='blue-round-box'>
            합주 완료 후 리뷰 작성
            <p>선호 유저 지정 및 유저 차단 가능</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
