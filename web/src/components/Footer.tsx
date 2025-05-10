import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

import home from '../assets/home.svg';
import music from '../assets/music.svg';
import person from '../assets/person.svg';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleMusicClick = () => {
        navigate('/schedule');
    };

    const handleMyPageClick = () => {
        navigate('/mypage');
    };

    return (
    <div className='Footer'>
        <div className='img_container' onClick={handleMusicClick} style={{ cursor: 'pointer' }}>
            <img src={music} alt="" className='img_music'/>
            <p>합주</p>
        </div>
        <div className='img_container' onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
            <img src={home} alt="" className='img_home'/>
            <p>메인</p>
        </div>
        <div className='img_container' onClick={handleMyPageClick} style={{ cursor: 'pointer' }}>
            <img src={person} alt="" className='img_person'/>
            <p>마이페이지</p>
        </div>
    </div>
    );
}

export default Footer;
