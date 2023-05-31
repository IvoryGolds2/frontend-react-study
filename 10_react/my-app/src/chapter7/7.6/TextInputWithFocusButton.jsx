import React, { useEffect, useRef } from 'react';

function TextInputWithFocusButton(props) {

  const inputEl = useRef(null); // 초기값 null
  console.log(inputEl); // 래퍼런스 객체라 부르는 일반적인 자바스크립트 객체를 반환함

  useEffect(() => {
    // 마운트 됐을 때 (렌더링 직후에) 실행되므로 input 엘리먼트가 나옴
    console.log(inputEl);
    // inputEl.current.focus(); // 여기에 넣으면 버튼 안눌러도 바로 포커스
    // 활용 예시: 로그인이나 회원가입 화면이 처음 보여졌을 때 굳이 클릭하지 않아도 포커스가 되어있게 하려면 useEffect() + useRef() 사용
  }, []);

  const onButtonClick = () => {
    // 실제 엘리먼트에 접근하여 focus() 함수를 호출
    // 여기서 current는 마운트 된 text input 엘리먼트를 담고 있음
    inputEl.current.focus(); // document.querySelector('aa').focus() 이거랑 같음
  };

  return (
    <>
    {/* ref 속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근 가능 */}
    {/* 마치 querySelector()와 같음 */}
      <input ref={inputEl} type="text" id="aa" />
      <button type='button' onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;