// src/pages/Mypage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import avatarImg from '../assets/폼폼푸린.png';   // 프로필 이미지
import '../styles/Mypage.css';

const Mypage: React.FC = () => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate('/review');
  };

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
          {/* 프로필 정보 영역 */}
          <div className="profile-top">
            <div className="avatar-container">
              <img src={avatarImg} alt="아바타" className="profile-avatar" />
            </div>
            <div className="profile-name-container">
              <div className="profile-name">폼폼푸린</div>
              <div className="profile-actions">
                <button className="btn-action like-btn">
                  <span className="heart-icon">❤️</span> 선호 유저 관리
                </button>
                <button className="btn-action block-btn">
                  <span className="block-icon">🚫</span> 차단 유저 관리
                </button>
              </div>
            </div>
          </div>
          
          {/* 포지션/장르 레이블 */}
          <div className="profile-category-label">
            포지션 / 장르
          </div>
          
          {/* 배지 영역 */}
          <div className="profile-badges">
            <div className="badge">포지션 : 보컬</div>
            <div className="badge">장르 : J-POP</div>
          </div>
          
          {/* 주소 영역 */}
          <div className="profile-location">
            <div className="location-label">내 주소</div>
            <div className="location-value">서울특별시 성북구 안암로 145 로봇융합관 1층</div>
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
              <button className="review-btn" onClick={handleReviewClick}>합주 리뷰 작성</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mypage;
