import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/accounts/login';

import '../css/LoginPage.css';

const LoginPage: React.FC = () => {
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

    if (await login(username, password)) {
        navigate(`/dashboard/${username}`);
    } else {
        setError('로그인에 실패하였습니다.');
        return;
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="login_id"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID를 입력하세요"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
