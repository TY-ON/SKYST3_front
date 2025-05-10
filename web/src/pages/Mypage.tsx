// src/pages/Mypage.tsx
import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import avatarImg from '../assets/폼폼푸린.png';   // 프로필 이미지
import '../styles/Mypage.css';

const Mypage: React.FC = () => {
  return (
    <div className="Mypage">
      <Header />
      <Background />

      <div className="Mypage-container">
        {/* 상단 타이틀 & 정보 변경 링크 */}
        <div className="mypage-header">
          <h2>마이페이지</h2>
          <button className="info-change-btn">내 정보 변경</button>
        </div>

        {/* 프로필 카드 */}
        <div className="profile-card">
          <img src={avatarImg} alt="아바타" className="profile-avatar" />
          <div className="profile-info">
            <h3>폼폼푸린</h3>
            <div className="profile-actions">
              <button className="btn-outline">
                ❤️ 선호 유저 관리
              </button>
              <button className="btn-outline">
                🚫 차단 유저 관리
              </button>
            </div>
            <div className="profile-field">
              <span className="label">포지션 :</span>
              <span className="value badge">보컬</span>
            </div>
            <div className="profile-field">
              <span className="label">선호장르 :</span>
              <span className="value badge">J-POP</span>
            </div>
            <p className="profile-address">
              서울특별시 성북구 안암로 145 뮤직룸랩 1층
            </p>
          </div>
        </div>

        {/* 매칭 히스토리 */}
        <div className="history-header">
          <h3>매칭 히스토리</h3>
          <button className="more-btn">더보기</button>
        </div>

        <div className="history-list">
          {[
            {
              date: '5월 15일 저녁 합주',
              members: '폼폼푸린, 쿠로미, 포차코, 마이멜로디, 시나모롤',
              location: '사운드시티 합주실'
            },
            {
              date: '5월 13일 오후 합주',
              members: '폼폼푸린, 치이카와, 하치와레, 우사기, 모모카',
              location: '송파 스페이스블루'
            },
          ].map((item, idx) => (
            <div key={idx} className="history-card">
              <p className="history-date">{item.date}</p>
              <p className="history-members">{item.members}</p>
              <p className="history-location">{item.location}</p>
              <button className="review-btn">합주 리뷰 작성</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mypage;
