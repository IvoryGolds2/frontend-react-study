import React from 'react';
// Quiz: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 랜더링 시key 값 추가해보기
const students = [
  { 
    id: '1',
    name: '김재현'
  },
  {
    id: '2',
    name: '유재석',
  },
  {
    id: '3',
    name: '이용대',
  },
  {
    id: '4',
    name: '유연성',
  }
];

// 출석부 이름 출력하기
function AttendanceBook(props) {
  return (
    <ul>
      {/* Quiz: 학생 이름을 반복 렌더링 해보기 */}
      {/* {students.map((list, index) => {
        return <li key={list.id}>{list.name}</li>;
      })} */}
      {students.map(list => <li key={list.id}>{list.name}</li>)}
    </ul>
  );
}

export default AttendanceBook;