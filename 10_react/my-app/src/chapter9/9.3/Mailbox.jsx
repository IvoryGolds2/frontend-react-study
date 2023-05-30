import React from 'react';

function Mailbox(props) {
  console.log(props);
  const unreadMessages = props.unreadMessages;

  const count = 0;

  return (
    <div>
      <h1>안녕하세요!</h1>
      {/* && 뒤의 엘리먼트는 조건이 true일 때 출력, 조건이 false라면 무시하고 건너뜀 */}
      {/* 조건에 따라 특정 엘리먼트를 나타내거나 숨기고 싶을 때 사용 */}
      {unreadMessages.length > 0 && ( // 앞에가 true면 뒤에 것을 렌더링
        <>
          <h2>{unreadMessages.length}개의 읽지 않은 메일이 있습니다</h2>
          {unreadMessages.map((unreadMessage, index) => {
            return <p key={index}>제목: {unreadMessage}</p>;
          })}
        </>
      )}

      {/* 주의! 
        falsy이면 여전히 && 뒤에 있는 표현식은 건너뛰지만, 
        falsy 표현식이 반환된다는 것에 주의(falsy 표현식에 따라 화면에 출력될 수도 있음)
      */}
      {false}
      {count && <h1>Message: {count}</h1>} 
      {/* 앞에 값이 true false가 아닌 0,NaN 등이 들어오면 화면에는 나타날 수 있음 */}
      {count > 0 && <h1>Message: {count}</h1>} 
    </div>
  );
}

export default Mailbox;