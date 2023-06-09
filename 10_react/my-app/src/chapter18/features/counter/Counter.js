import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { useState } from 'react';


// 5. 리액트 컴포넌트에서 Redux Store와 Actions 사용하기
function Counter(props) {
  // Redux Store에 있는 state를 가져오는 함수
  const count = useSelector((state) => { return state.counter.value})
  // state만 리턴하면 전역 state 전부 가져옴(꼭 어떤 데이터가 필요한지 명시해서 리턴 할 것)

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch()
  console.log(useDispatch());

  const [incrementAmount, setIncrementAmount] = useState('2');
  const inscrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div>
        <button
        type='button'
        // 전역 상태를 업데이트 하는 유일한 방법
        // dispatch() 함수: 액션 객체를 스토어에 보냄
        //  -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어줌
        // decrement() 함수: 액션(객체) 생성 함수
        // 함수 실행 결과:
      //   {
      //     payload: undefined;
      //     type: "counter/decrement";
      // }

        onClick={() => dispatch(decrement())}
        >
          감소
        </button>
        <span> {count} </span>
        <button
        type='button'
        onClick={() => dispatch(increment())}
        >
          증가
        </button>
      </div>
      <div>
        <input
          type='text'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type='button'
          onClick={() => dispatch(incrementByAmount(inscrementValue))}
        >
          Add Amount
        </button>
      </div>
    </>
  );
}

export default Counter;