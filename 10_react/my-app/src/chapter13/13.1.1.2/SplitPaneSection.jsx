import React from 'react';
import './SplitPaneSection.css';

function Contacts(params) {
  return <div className='Contacts' />
}
function Chat(params) {
  return <div className='Chat' />
}

// 화면을 왼쪽과 오른쪽으로 분할해서 보여주는 컴포넌트
function SplitPane(props){
  console.log(props);
  console.log(props.left);
  console.log(props.right);
  return(
    <div className='SplitPane'>
      <div className='SplitPane-left'>
        {props.left}
      </div>
      <div className='SplitPane-right'>
        {props.right}
      </div>
  </div>
);
}

// 1. 리액트는 props.children을 통해 하위 자식 엘리먼트를 하나로 모아서 제공
// children 하나에 다 담아서 쓰고 싶지 않다면..?
// 2. 별도로 props를 정의해서 각각 원하는 컴포넌트(엘리먼트)를 넣어주면됨
function SplitPaneSection(props) {
  return (
    // 1.
    // <SplitPane>
    //   <Contacts />
    //   <Chat />
    // </SplitPane>

    // 2.
    <SplitPane 
      left={<Contacts />}
      right={<Chat />}
      />
  );
}

export default SplitPaneSection;