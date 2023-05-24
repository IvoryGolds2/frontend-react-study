import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복가능한 배열에 담기
const comments = [
  {
    name: 'kimgoni',
    content: 'hello im goni'
  },
  {
    name: 'ivory',
    content: 'reactwa muzucasi'
  },
  {
    name: 'rai',
    content: 'onnajidesu'
  },
  {
    name: 'kira',
    content: 'onnajidesu'
  }
]

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList() {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 content값 전달
      <Comment 
        name="Ivory"  // 원래는 {} 하고 적어야 하지만 문자열이라 생략 가능
        content="너무어렵습니다."
      />
      <Comment 
        name="상아"
        content="이렇게 하는게 맞는걸까요?"
      />
      <Comment
        name="라이"
        content="꾸악"
      /> */}

      {/* 배열을 동적으로 렌더링해야 할 떄는 배열의 map()함수를 사용
      (map(): 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
      앞으로 리액트에서 배열을 동적으로 렌더링해야 할 때는 map() 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨 */}
      {comments.map((comment, index) => {
        return (
          <Comment name={comment.name} content={comment.content}/>
        );
      })}

      {/* map() 함수의 결과
      {
        [1, 2, 3].map(element => element * 10)
        [10, 20, 30]
      } */}
    </div>
  );
}

export default CommentList;