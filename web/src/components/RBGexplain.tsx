import '../styles/RBGexplainer.css';

import main_img from '../assets/main.png';

const RBGexplainer = () => {
    return (
        <>
        <div className='title'>
            <h2>내 취향에 맞는 밴드 생성기</h2>
            <h1>Random Band Generator</h1>
        </div>
        <div className='img'>
            <img src={main_img} id='main_img'/>
        </div>
        </>
    );
}

export default RBGexplainer;