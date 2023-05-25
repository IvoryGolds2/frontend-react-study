import { useState } from "react";

function SetStateMerge() {
  const [result, setResult] = useState(2);

  const handleAdd = () => {
    // setResult(result + 5);
    setResult(result => result + 5 )
  };
  const handleSub = () => {
    // setResult(result - 3);
    setResult(result => result - 3 )

  };
  const handleMul = () => {
    // setResult(result * 2);
    setResult(result => result * 2 )

  };
  const handleDiv = () => {
    // setResult(result / 2);
    setResult(result => result / 2 )

  };
  const handleMixCalc = () => {
    handleAdd(); // 2 + 5 = 7
    handleMul(); // 7 * 2 = 14 가 나올것이라고 예상 하지만 결과는 4가 나옴
    // => handleMul()만 실행됨
  };
  // setState()는 비동기로 처리됨(=비동기 함수)
  // 그래서 하나의 state를 동시에 여기저기서 수정하려고 할 때 문제 발생
  // 같은 state를 바꾸는 set함수가 동시에 여러번 실행되면 의도한 값이 안나올 수 있음
  // 그래서 state와 상관없는 새로운 값을 넣는 것이 아니면 콜백 형태로 쓸 것을 권장
  // 이 때 콜백 함수의 첫번째 매개변수로 이전 state를 받아들임

  return (
    <div>
      <p>계산 결과: {result}</p>
      <button type="button" onClick={handleAdd}>+ 5</button>
      <button type="button" onClick={handleSub}>- 3</button>
      <button type="button" onClick={handleMul}>* 2</button>
      <button type="button" onClick={handleDiv}>/ 2</button>
      <button type="button" onClick={handleMixCalc}>MixCalc</button>
    </div>
  );
}
export default SetStateMerge;