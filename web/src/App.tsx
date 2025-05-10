import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import Share from './pages/Share';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/share" element={<Share />} />
          <Route path="/mypage" element={<Mypage />} />
          {/* 필요시 메인 페이지를 /login 또는 /home 등으로 리다이렉트 */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;