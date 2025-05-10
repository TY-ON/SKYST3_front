// src/pages/Share.tsx
import React from 'react';
import location_img from '../assets/그라운드합주실.jpeg';
import '../styles/Share.css';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

const Share: React.FC = () => (
  <div className="Share">
    {/* Header */}
    <Header />

    {/* Gradient background at z-index 0 */}
    <div className="Share-bg">
      <Background />
    </div>

    {/* Main content above background */}
    <div className="Share-content">
      {/* Page title */}
      <h2 className="share-title">약속 공유하기</h2>

      {/* White card with details */}
      <div className="share-card">
        <p className="share-date">5월 15일 저녁 합주</p>

        <p className="share-members-label">멤버</p>
        <p className="share-members">
          폼폼푸린, 마이멜로디, 시나모롤, 쿠로미, 포차코
        </p>

        <img
          src={location_img}
          className="share-location-img"
          alt="장소 사진"
        />
        <p className="share-location-text">
          홍대 그라운드합주실 본점
        </p>
      </div>

      {/* Share button */}
      <button className="share-button">공유하기</button>
    </div>

    {/* Footer fixed at bottom */}
    <Footer />
  </div>
);

export default Share;