import './App.css';
import { useState, useEffect } from 'react';
import PostDetail from './components/PostDetail';



// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)
function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트', '자바스크립트', '문법 공부']);

  const [date, setDate] = useState(['2023년1월14일', '1995년12월30일', '1994년1월17일']);

  const [writer, setWriter] = useState('');

  const [showPostDetail, setShowPostDetail] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);

  const [value, setValue] = useState('');
  
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  //   console.log(e.target.value);
  // }

  return (
    <>
      {/* 헤더 만들기 */}
      <header className="header--dark">
        <h4>Ivorylog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className="inner">
        {/* 포스트 목록 */}
        {/* <div className="list">
          <h4>{posts[0]}</h4>
          <p>2023년 1월14일</p>
          <p>by Ivory</p>
        </div>
        <div className="list">
          <h4>{posts[1]}</h4>
          <p>2023년 12월30일</p>
          <p>by Rai</p>
        </div>
        <div className="list">
          <h4>{posts[2]}</h4>
          <p>2023년 1월17일</p>
          <p>by WookMan</p>
        </div> */}

        {/* Quiz: map()을 이용하여 posts 반복 출력하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className="list"
            onClick={() => {
              setShowPostDetail(true);
              setCurrentIndex(index);
            }}>
            <h4>{post}</h4>
        
            <p>{date}</p>
            <p>by {writer}</p>

            <hr />

            <div className='toolbar'>
              {/* 좋아요 기능 만들기 */}
              <span onClick={(e) => {
                // (버그 수정) 현재는 좋아요 버튼 누를 때 글 상세보기까지 같이 클릭됨!!
                // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남
                e.stopPropagation(); // 상위 요소로 퍼지는 이벤트 버블링을 막음
                const copyLikeCount = [...likeCount]; // 배열의 복사본(새로운 배열)
                copyLikeCount[index]++
                setLikeCount(copyLikeCount)
              }}>💗  {likeCount[index]}</span>

              {/* 포스트 삭제하기 */}
              <span style={{fontSize: 27}}
              onClick={(e) => {
                // div를 직접 제거하는게 아니고
                // state에서 제거하면 알아서 자동으로 렌더링됨
                e.stopPropagation();
                // const copyPosts = [...posts];
                // copyPosts.splice(index, 1);
                // setPosts(copyPosts)
                // 또는 배열의 filter() 함수 사용
                const filteredPosts = posts.filter((value,idx) => {
                  return idx !== index;
                });
                setPosts(filteredPosts)
                // (버그수정) 삭제 시 해당 포스트의 좋아요 카운트도 같이 삭제
                const copyLikeCount = [...likeCount];
                copyLikeCount.splice(index,1)
                setLikeCount(copyLikeCount)
              }}
              >🗑</span>
            </div>
          </div>
          );
        })}

        {/* 포스트 등록하기 */}
        {/* Quiz: 제목 입력 후 등록 버튼을 누르면 맨 앞에 새로운 포스트를 추가 */}
        {/* 
        1. 제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리 
        2. 등록 버튼 클릭 시 posts 상태 맨 앞에 새로운 데이터 추가 
        */}
        <input type='text' value={value} 
        onChange={(e) => setValue(e.target.value)} />

        <button type='button' onClick={() => {
          // div 하나를 새로 생성
          // posts state에 요소 하나 추가하면 자동으로 렌더링O
          // copyPosts.unshift(value);
          const copyPosts = [value,...posts]
          setPosts(copyPosts);
          setValue('');

          // (버그 수정) 포스트 하나 추가 시 좋아요 카운트도 같이 추가
          const copyLikeCount = [0,...likeCount]
          setLikeCount(copyLikeCount)
        }}>포스트 등록</button>

        {/* 포스트 상세보기 */}
        {showPostDetail && <PostDetail posts={posts} 
        currentIndex={currentIndex} setPosts={setPosts}/>}
      </div>
    </>
  );
}

export default App;

// 왜 새로고침하면 다 없어질까..?
// 새로고침 시 HTML/CSS/JS 파일을 다시 읽어옴
// 데이터를 유지하려면 서버에 보내서 DB에 영구 저장하고
// 새로고침 발생 시 DB에서 다시 읽어오면 됨

// <추가 개선 과제>
// 1. PostListItem 컴포넌트 추출

// 2. 날짜 및 작성자, 좋아요 수 등 데이터를 문자열이 아닌 객체 형태로 처리해보기
// state에 글 제목만 저장되어 있는게 아니라 날짜같은 것도 저장해두고 보여주는 식이면 굿
// 글 등록 시 현재 날짜까지 같이 저장되도록 하면 나이스

// 3. input에 아무것도 입력안하고 등록 버튼 누르는거 막기
// 유저의 의도치않은 행동을 막는 코드도 많이 짜야 안전한 사이트가 됨
// 1) 미입력시 비활성화 -> 입력이 생기면 버튼 활성화
// 2) 등록 버튼 누를 시 유효성 검사

// 4. 포스트 수정할 때 input으로 입력받은 내용으로 수정해보기

// 5. 글 오름차순 정렬

// 6. 그 외 개선 및 구현할 것 많으니 자유롭게 연습