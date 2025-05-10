import React from 'react';
import '../styles/Location.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import groundImg from '../assets/그라운드합주실.jpeg';
import soundcityImg from '../assets/사운드시티합주실.jpeg'; // 필요시 경로/파일명 조정

const Location: React.FC = () => {
  return (
    <div className="location-page">
      <Header />

      <div className="location-container">
        <h2 className="location-title">합주 지역 선정 결과</h2>
        <div className="location-area-badge">Area 2</div>

        <div className="location-card">
          <img src={groundImg} alt="홍대 그라운드합주실" className="location-img" />
          <div className="location-info">
            <h3>홍대 그라운드합주실 본점</h3>
            <p>📍 홍대입구역 1번 출구에서 90m</p>
            <p>💰 시간당 12,000원 ~ 22,000원</p>
            <div className="location-buttons">
              <button className="review-btn">리뷰 보기</button>
              <button className="recommend-btn">추천하기</button>
            </div>
          </div>
        </div>

        <div className="location-card">
          <img src={soundcityImg} alt="사운드시티 합주실" className="location-img" />
          <div className="location-info">
            <h3>사운드시티 합주실</h3>
            <p>📍 합정역 3번 출구에서 376m</p>
            <p>💰 시간당 14,000원 ~ 24,000원</p>
            <div className="location-buttons">
              <button className="review-btn">리뷰 보기</button>
              <button className="recommend-btn">추천하기</button>
            </div>
          </div>
        </div>

        <button className="next-btn">다음</button>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
