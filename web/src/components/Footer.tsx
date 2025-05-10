import '../styles/Footer.css';

import home from '../assets/home.svg';
import music from '../assets/music.svg';
import person from '../assets/person.svg';

const Footer: React.FC = () => {
    return (
    <div className='Footer'>
        <div className='img_container'>
            <img src={music} alt="" className='img_music'/>
            <p>합주</p>
        </div>
        <div className='img_container'>
            <img src={home} alt="" className='img_home'/>
            <p>합주</p>
        </div>
        <div className='img_container'>
            <img src={person} alt="" className='img_person'/>
            <p>합주</p>
        </div>
    </div>
    );
}

export default Footer;
