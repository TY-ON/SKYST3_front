import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import groundImg from '../assets/그라운드합주실.jpeg';
import soundcityImg from '../assets/사운드시티.jpeg'; // 실제 파일 필요
import '../styles/Share.css';

const Location: React.FC = () => {
  return (
    <div className="Share">
      <Header />

      <div className="Share-content">
        <h1 className="share-title">합주 지역 선정 결과</h1>

        {/* 카드 1: 그라운드합주실 */}
        <div className="share-card">
          <img src={groundImg} alt="그라운드합주실" className="share-location-img" />
          <div className="place">
            <h2><strong>홍대 그라운드합주실 본점</strong></h2>
            <p>📍 홍대입구역 1번 출구에서 90m</p>
            <p>💰 시간당 12,000원 ~ 22,000원</p>
          </div>
          <div className="share-buttons">
            <button className="blue-round-box" style={{ backgroundColor: '#FFFFFF', color: 'black', border: '1px solid black'}}>리뷰 보기</button>
            <button className="blue-round-box" style={{ backgroundColor: '#84DE7C' }}>추천하기</button>
          </div>
        </div>

        {/* 카드 2: 사운드시티합주실 */}
        <div className="share-card">
          <img src={soundcityImg} alt="사운드시티합주실" className="share-location-img" />
          <div className="place">
            <h2><strong>사운드시티 합주실</strong></h2>
            <p>📍 합정역 3번 출구에서 376m</p>
            <p>💰 시간당 14,000원 ~ 24,000원</p>
          </div>
          <div className="share-buttons">
            <button className="blue-round-box" style={{ backgroundColor: '#FFFFFF', color: 'black', border: '1px solid black' }}>리뷰 보기</button>
            <button className="blue-round-box" style={{ backgroundColor: '#84DE7C' }}>추천하기</button>
          </div>
        </div>

        {/* 다음 버튼 */}
        <button className="blue-round-box">다음</button>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
