import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import avatarImg from '../assets/폼폼푸린.png';
import '../styles/Review.css';


const Review: React.FC = () => {
    const navigate = useNavigate();
    const [activeButtons, setActiveButtons] = useState<{ [key: string]: boolean }>({});

    const handleButtonClick = (buttonId: string) => {
        setActiveButtons(prev => ({
            ...prev,
            [buttonId]: !prev[buttonId]
        }));
    };

    const handleReviewComplete = () => {
        alert('리뷰가 완료되었습니다');
        navigate('/home');
    };

    return (
        <div className="Review">
            <Header />
            <Background />
            <div className="Review-container">
                <div className="review_header">
                    <h1>합주 리뷰하기</h1>
                </div>
                <div className="review_content_container">
                    <div className="blue-round-box">
                        <h1>5월 15일 저녁 합주</h1>
                    </div>
                    <div className="review_content>">
                        <div className="player_card">
                            <div className="avatar_container">
                                <img src={avatarImg} alt="아바타" className="profile-avatar" />
                            </div>
                            <div className="player_name_container">
                                <div className="player_name">폼폼푸린</div>
                                <div className="area">Area 6</div>
                            </div>
                            <div className="player_info">
                                <div className="badge">보컬</div>
                                <div className="badge">나</div>
                            </div>
                        </div>
                        <div className="player_card">
                            <div className="avatar_container">
                                <img src={avatarImg} alt="아바타" className="profile-avatar" />
                            </div>
                            <div className="player_name_container">
                                <div className="player_name">폼폼푸린</div>
                                <div className="area">Area 6</div>
                            </div>
                            <div className="player_info">
                                <div className="badge">보컬</div>
                            </div>
                            <div className="button_container">
                                <button 
                                    className={`btn-action block-btn ${activeButtons['block1'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('block1')}
                                >
                                    🚫
                                </button>
                                <button 
                                    className={`btn-action like-btn ${activeButtons['like1'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('like1')}
                                >
                                    ❤️
                                </button>
                            </div>
                        </div>
                        <div className="player_card">
                            <div className="avatar_container">
                                <img src={avatarImg} alt="아바타" className="profile-avatar" />
                            </div>
                            <div className="player_name_container">
                                <div className="player_name">폼폼푸린</div>
                                <div className="area">Area 6</div>
                            </div>
                            <div className="player_info">
                                <div className="badge">보컬</div>
                            </div>
                            <div className="button_container">
                                <button 
                                    className={`btn-action block-btn ${activeButtons['block2'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('block2')}
                                >
                                    🚫
                                </button>
                                <button 
                                    className={`btn-action like-btn ${activeButtons['like2'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('like2')}
                                >
                                    ❤️
                                </button>
                            </div>
                        </div>
                        <div className="player_card">
                            <div className="avatar_container">
                                <img src={avatarImg} alt="아바타" className="profile-avatar" />
                            </div>
                            <div className="player_name_container">
                                <div className="player_name">폼폼푸린</div>
                                <div className="area">Area 6</div>
                            </div>
                            <div className="player_info">
                                <div className="badge">보컬</div>
                            </div>
                            <div className="button_container">
                                <button 
                                    className={`btn-action block-btn ${activeButtons['block3'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('block3')}
                                >
                                    🚫
                                </button>
                                <button 
                                    className={`btn-action like-btn ${activeButtons['like3'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('like3')}
                                >
                                    ❤️
                                </button>
                            </div>
                        </div>
                        <div className="player_card">
                            <div className="avatar_container">
                                <img src={avatarImg} alt="아바타" className="profile-avatar" />
                            </div>
                            <div className="player_name_container">
                                <div className="player_name">폼폼푸린</div>
                                <div className="area">Area 6</div>
                            </div>
                            <div className="player_info">
                                <div className="badge">보컬</div>
                            </div>
                            <div className="button_container">
                                <button 
                                    className={`btn-action block-btn ${activeButtons['block4'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('block4')}
                                >
                                    🚫
                                </button>
                                <button 
                                    className={`btn-action like-btn ${activeButtons['like4'] ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('like4')}
                                >
                                    ❤️
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review_footer">
                    <div className="blue-round-box">
                        <h1>합주실 리뷰하기</h1>
                    </div>
                </div>
                <div className="review_footer">
                    <div className="blue-round-box" onClick={handleReviewComplete} style={{ cursor: 'pointer' }}>
                        <h1>리뷰 완료</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Review;