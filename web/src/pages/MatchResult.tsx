import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import avatarImg from '../assets/폼폼푸린.png';
import cinnamorollImg from '../assets/시나모롤.png';
import kuromiImg from '../assets/쿠로미.png';
import mymelodyImg from '../assets/마이멜로디.png';
import pochaccoImg from '../assets/포챠코.png';
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
                        <div className="match_result_player_card">
                            <div className="match_result_avatar_container">
                                <img src={avatarImg} alt="아바타" className="profile-avatar" />
                            </div>
                            <div className="match_result_player_name_container">
                                <div className="match_result_player_name">폼폼푸린</div>
                                <div className="match_result_area">Area 6</div>
                            </div>
                            <div className="match_result_player_info">
                                <div className="match_result_badge">
                                    <h3>보컬</h3>
                                </div>
                                <div className="match_result_badge">
                                    <h3>나</h3>
                                </div>
                            </div>
                        </div>
                        <div className="match_result_player_card">
                            <div className="match_result_avatar_container">
                                <img src={cinnamorollImg} alt="시나모롤" className="profile-avatar" />
                            </div>
                            <div className="match_result_player_name_container">
                                <div className="match_result_player_name">시나모롤</div>
                                <div className="match_result_area">Area 2</div>
                            </div>
                            <div className="match_result_player_info">
                                <div className="match_result_badge">
                                    <h3>기타</h3>
                                </div>
                            </div>
                        </div>
                        <div className="match_result_player_card">
                            <div className="match_result_avatar_container">
                                <img src={kuromiImg} alt="쿠로미" className="profile-avatar" />
                            </div>
                            <div className="match_result_player_name_container">
                                <div className="match_result_player_name">쿠로미</div>
                                <div className="match_result_area">Area 2</div>
                            </div>
                            <div className="match_result_player_info">
                                <div className="match_result_badge">
                                    <h3>보컬</h3>
                                </div>
                            </div>
                        </div>
                        <div className="match_result_player_card">
                            <div className="match_result_avatar_container">
                                <img src={mymelodyImg} alt="마이멜로디" className="profile-avatar" />
                            </div>
                            <div className="match_result_player_name_container">
                                <div className="match_result_player_name">마이멜로디</div>
                                <div className="match_result_area">Area 3</div>
                            </div>
                            <div className="match_result_player_info">
                                <div className="match_result_badge">
                                    <h3>베이스</h3>
                                </div>
                            </div>
                        </div>
                        <div className="match_result_player_card">
                            <div className="match_result_avatar_container">
                                <img src={pochaccoImg} alt="포챠코" className="profile-avatar" />
                            </div>
                            <div className="match_result_player_name_container">
                                <div className="match_result_player_name">포챠코</div>
                                <div className="match_result_area">Area 1</div>
                            </div>
                            <div className="match_result_player_info">
                                <div className="match_result_badge">
                                    <h3>드럼</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="match_result_next_button_container">
                        <button className="match_result_next_button" onClick={handleNext}>다음</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MatchResult; 