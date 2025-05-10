import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import avatarImg from '../assets/폼폼푸린.png';
import '../styles/MatchResult.css';

const MatchResult: React.FC = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/location');
    };

    return (
        <div className="MatchResult">
            <Header />
            <Background />
            <div className="MatchResult-container">
                <div className="match_result_header">
                    <h1>매칭 결과</h1>
                </div>
                <div className="match_result_content_container">
                    <div className="blue-round-box">
                        <h1>5월 15일 저녁 합주</h1>
                    </div>
                    <div className="match_result_content">
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
                        </div>
                    </div>
                    <div className="next_button_container">
                        <button className="next_button" onClick={handleNext}>다음</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MatchResult; 