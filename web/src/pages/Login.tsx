import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/accounts/login';
import '../styles/Login.css';
import Background from '../components/Background';
import Footer from '../components/Footer';
// import Header from '../components/Header';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('사용자 이름과 비밀번호를 입력하세요.');
      return;
    }
    console.log(username, password)
    if (await login(username, password)) {
      navigate(`/dashboard/${username}`);
    } else {
      setError('로그인에 실패하였습니다.');
      return;
    }
  };

  return (
    <div className="Login">
      <div className="Login-bg">
        <Background />
      </div>
      <div className="login-logo-row">
        <img src={require('../assets/logo.png')} alt="Bandit Logo" className="bandit-logo-img" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="login_id"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
