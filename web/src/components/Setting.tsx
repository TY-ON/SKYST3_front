import React, { MouseEventHandler, ReactElement, useEffect, useState } from 'react';

import jpop from '../assets/jpop.jpg'
import kpop from '../assets/kpop.jpg'
import indi from '../assets/indi.jpg'
import heavy from '../assets/heavy.jpg'
import hiphop from '../assets/hiphop.jpg'

import calendar from '../assets/calendar.svg'

import { true_random, part_random } from '../api/queue';
import { useNavigate } from 'react-router-dom';

export interface ContentProp {
  id: string,
  name: string,
  img: string
}

export interface SettingProp {
  random: string;
}

const SettingRandom:React.FC<SettingProp> = ({random}) => {
  const [janre, setJanre] = useState("");
  const [time, setTime] = useState("evening");
  
  let navigate = useNavigate();

  var tooltip = "ERROR";

  if (random === "true") {
    tooltip = "포지션 완전 랜덤";
  } else if (random === "part") {
    tooltip = "포지션 지정";
  }

  const onClickHandler_janre = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setJanre(event.currentTarget.id);
  }

  const onClickHandler_time = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTime(event.currentTarget.id);
  }

  const onClickHandler_match = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (janre === "") {
      return false;
    }
    const start_date = "2025-06-01";
    const end_date = "2025-06-05";
    const instrument = "bass";

    if (random !== "true" && random !== "part") {
      return false;
    }

    navigate("/matching",  { replace: true, state:{ 
      random: random,
      start_date: start_date, end_date: end_date, 
      time_slot: time,
      genre: janre,
      instrument: instrument
    }});

    return true;
  }

  const ChooseContent: React.FC<ContentProp> = ({id, name, img}) => {
    return (
      <div className='choose_content' id={id} style={{backgroundImage: img}} onClick={onClickHandler_janre}>
        <div><p>{name}</p></div>
      </div>
    );
  }

  const Janre_tsx: Record<string, ReactElement> = { 
    "jpop": <ChooseContent id="jpop" name="Jpop" img={`url(${jpop})`}/>,
    "kpop": <ChooseContent id="kpop" name="Kpop" img={`url(${kpop})`}/>,
    "indi": <ChooseContent id="indi" name="인디 밴드" img={`url(${indi})`}/>,
    "heavy": <ChooseContent id="heavy" name="헤비메탈" img={`url(${heavy})`}/>,
    "hiphop": <ChooseContent id="hiphop" name="힙합 R&B" img={`url(${hiphop})`}/>
  }

  if (janre == "") {
    return (
    <div className='setting_true_random'>
      <div className='setting_container'>
        <div className='title_container'>
          <h3>장르 선택</h3>
          <input type="text" placeholder='코드 입력'/>
        </div>
        {Object.entries(Janre_tsx).map(([key, value]) => (
          value
        ))}
        <div className='tooltip'>
          <h3>유저 설정을 바탕으로 <br/>[포지션 완전 랜덤] 매칭을 진행합니다</h3>
        </div>
        <div className='blue-round-box'>
          매칭 시작하기
        </div>
      </div>
    </div>
    );
  }


  return (
    <div className='setting_true_random'>
      <div className='setting_container'>
        <div className='title_container'>
          <h3>장르 선택</h3>
          <input type="text" placeholder='코드 입력'/>
        </div>
        {Janre_tsx[janre]}

        <div className='date_container'>
          <h3>날짜 선택</h3>
          <div className='date_selector'>
            <h3>5월 12일 ~ 5월 17일</h3>
            <img src={calendar} alt="" id='calendar'/>
          </div>
        </div>
        <div className='time_container'>
          <h3>시간 선택</h3>
          <div className='time_selector'>
            <div className={`${time==="morning"?"blue-round-box ":""}time`} id='morning' onClick={onClickHandler_time}><h3>오전</h3></div>
            <div className={`${time==="afternoon"?"blue-round-box ":""}time`} id='afternoon' onClick={onClickHandler_time}><h3>오후</h3></div>
            <div className={`${time==="evening"?"blue-round-box ":""}time`} id='evening' onClick={onClickHandler_time}><h3>저녁</h3></div>
          </div>
        </div>

        <div className='tooltip'>
          <h3>유저 설정을 바탕으로 <br/>[{tooltip}] 매칭을 진행합니다</h3>
        </div>
        <div className='blue-round-box' onClick={onClickHandler_match}>
          매칭 시작하기
        </div>
      </div>
    </div>
  );
}

export default SettingRandom;