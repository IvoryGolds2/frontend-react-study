import React from 'react';
import Card from './Card';

function ProfileCard(props) {
  return (
    <Card
      title="Ivory Gold"
      backgroundColor="#afdfaf"
    >
      <p>안녕하세요 상아에오</p>
      <p>리액트를 공부중입니다~</p>
    </Card>
  );
}

export default ProfileCard;