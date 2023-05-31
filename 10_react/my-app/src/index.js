import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';

import PropUse from './chapter5/5.3/PropsUse';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';
import Notification from './chapter6/Notification';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Count';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import EffectSummary from './chapter7/7.3/ex3/EffectSymmary';
import EffectContainer from './chapter7/7.3/ex3/EffectContainer';
import Timer from './chapter7/7.3/ex4/Timer';
import TimerContainer from './chapter7/7.3/ex4/TimerContainer';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.2/LoginControl';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import ListKex from './chapter10/10.2/ListKey';
import ListKey from './chapter10/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlaverForm from './chapter11/11.3/FlaverForm';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import FileInput from './chapter11/11.3/FileInput';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRecactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Root DOM Node에 렌더링 하도록 하는 함수
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
// const messages = ['React', 'Re: react'];

root.render(
  // <App />

  // 3장 예제
  // <JsxUse />
  // <Library />

  // 5장 예제
  // <PropsUse />
  // <CommentList />

  // 6장 예제
  // <NotificationList />
  
  // 7장 예제
  // <Counter />
  // <SetStateMerge />
  // <CounterEffect />
  // <EffectSummary />
  // <EffectContainer />
  // <TimerContainer />
  // <TextInputWithFocusButton />
  // <ComponentVariable />

  // 8장 예제
  // <Toggle />
  // <MyButton />
  // <ConfirmButton />

  // 9장 예제
  // <Greeting isLoggedIn={true} />
  // <LoginControl />
  // 9.3예제
  // <Mailbox unreadMessages={messages} age={30}/>
  // <LoginControlRefactoring />
  // <MainPage />
  // <LandingPage />

  // 10장 예제
  // <NumberList numbers={[1, 2, 3, 4, 5]} />
  // <ListKey />
  // <AttendanceBook />

  // 11장 예제
  // <NameForm />
  // <EssayForm />
  // <FlaverForm /> 
  // <FileInput />
  // <Reservation />
  // <ReservationRecactoring />
  <SignUp />
);

// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// (참고로 실제 개발에서 이렇게 쓰는 경우는 없음)
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();