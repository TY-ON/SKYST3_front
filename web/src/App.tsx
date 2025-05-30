import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import Share from './pages/Share';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Matching from './pages/Matching';
import Schedule from './pages/Schedule';
import Review from './pages/Review';
import Location from './pages/Location';
import MatchResult from './pages/MatchResult';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/share" element={<Share />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/review" element={<Review />} />
          <Route path="/location" element={<Location />} />
          <Route path="/matchresult" element={<MatchResult />} />
          {/* 필요시 메인 페이지를 /login 또는 /home 등으로 리다이렉트 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;