import logo from '../assets/logo.png';

import '../styles/Header.css';

const Header: React.FC = () => {

    return (
    <div className='Header'>
        <img src={logo} className='logo'/>
    </div>
    );
}

export default Header;
