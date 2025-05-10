// src/pages/Share.tsx
import React from 'react';
import location_img from '../assets/그라운드합주실.jpeg';
import '../styles/Share.css';

import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

import ShareCard from '../components/ShareCard';

const Share: React.FC = () => {
  const handleShare = () => {
    alert('공유했습니다');
  };

  return (
    <div className="Share">
      <Header />
      <Background />

      <div className="Share-content">
        <h1>약속 공유하기</h1>
        <ShareCard 
          date={"2025-05-17"}
          time_slot={'evening'}
          member={["폼폼푸린", "마이멜로디", "시나모롤", "쿠로미", "포차코"]}
          location_img={location_img}
          location_text={"홍대 그라운드합주실 본점"}
        />

        <button className="blue-round-box" onClick={handleShare}>
          <h2>공유하기</h2>
        </button>
      </div>
      <Footer />
    </div>);
}

export default Share;