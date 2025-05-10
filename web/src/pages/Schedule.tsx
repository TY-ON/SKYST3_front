// src/pages/Share.tsx
import React from 'react';
import location1_img from '../assets/그라운드합주실.jpeg';
import location2_img from '../assets/스페이스블루.jpeg'
import '../styles/Schedule.css';

import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

import ShareCard from '../components/ShareCard';

const Schedule: React.FC = () => {

  return (
    <div className="Schedule">
      <Header />
      <Background />

      <div className="Schedule-content">
        <h1>나의 합주 일정</h1>

        <ShareCard 
          date={"2025-05-17"}
          time_slot={'evening'}
          member={["폼폼푸린", "마이멜로디", "시나모롤", "쿠로미", "포차코"]}
          location_img={location1_img}
          location_text={"홍대 그라운드합주실 본점"}
        />

        
        <ShareCard 
          date={"2025-05-13"}
          time_slot={'evening'}
          member={["폼폼푸린", "치이카와", "하치와레", "우사기", "모몽가"]}
          location_img={location2_img}
          location_text={"송파 스페이스블루"}
        />

      </div>
      <Footer />
    </div>);
}

export default Schedule;