import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function GamePage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>게임 페이지</h1>
      <ul>
        <li>
          <Link to="/games/hot">인기 게임</Link>
        </li>
        {/* Nested Route의 자식 앨리먼트를 보여주는 역할 */}
        <li>
          <Link to="/games/new">신규 게임</Link>
        </li>
      </ul>
      <Outlet />
      <button type='button' onClick={() => { navigate('/'); }}>메인으로</button>
    </div>
  );
}

export default GamePage;