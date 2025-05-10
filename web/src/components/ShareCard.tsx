// src/pages/Share.tsx
import React from 'react';
import location_img from '../assets/그라운드합주실.jpeg';
import '../styles/Share.css';

interface ShareProps {
    date: string,
    time_slot: string,
    member: string[],
    location_img: string,
    location_text: string
}

const ShareCard: React.FC<ShareProps> = ({date, time_slot, member, location_img, location_text}) => {
    const time_texts:{[key: string]: string;} = {morning:'아침', afternoon:'오후', evening:'저녁'};
    
  return (
    <div className="share-card">
        <h2>{date.split('-')[1]}월 {date.split('-')[2]}일 {time_texts[time_slot]} 합주</h2>

        <div className='member'>
        <h2>멤버</h2>
        <h3>
            {member.toString()}
        </h3>
        </div>
        
        <div className='place'>
        <h2>장소</h2>
        <img
            src={location_img}
            className="share-location-img"
            alt="장소 사진"
        />
        <p>
            {location_text}
        </p>
        </div>
    </div>
  );
}

export default ShareCard;