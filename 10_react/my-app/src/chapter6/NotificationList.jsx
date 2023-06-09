import Notification from "./Notification";
import React from "react";

const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다'
  },
  {
    id: 2,
    message: '점심 같이 먹을래?'
  },
  {
    id: 1,
    message: '얼른 준비하고 회의실로 오세요'
  }
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [] // state에 notifications라는 이름으로 초기값은 빈 배열
    };
  }

  // 컴포넌트가 생성될 때 호출되는 메소드
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) { // 3개 보다 작은 경우에
        const index = notifications.length;
        notifications.push(reservedNotifications[index]); // notifications 배열에 추가
        this.setState({
          // notifications: notifications
          notifications // ES6차 문법
        });
      } else {
        // 추가 실습2: 언마운트 시키기 위해 작성
        // this.setState({
        //   notifications: []
        // });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((noti) => {
          return (
            <Notification 
              key={noti.id}
              id={noti.id}
              message={noti.message}
            />
          );
        })}
      </div>
    )
  }
}

export default NotificationList;