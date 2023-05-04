// Youtube IFrame API를 로드
// IFrame API를 쓰는 이유
// <IFrame> 태그만 써도 유튜브 영상 삽입은 가능하지만 태그의 속성만으로 커스텀 하기에는 한계가 있음
// api를 사용하면 다양한 명령으로 동영상 제어 가능

// (참고) iframe(inline frame의 약자): HTML문서 내에 다른 문서를 삽입하는데 사용하는 태그
let tag = document.createElement('script'); //<script>
  tag.src = "https://www.youtube.com/iframe_api"; //<script src="https://www.youtube.com/iframe_api">
  let firstScriptTag = document.getElementsByTagName('script')[0]; // 태그명으로 찾은 <script> 태그중에 가장 첫번째 요소
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //firstScriptTag 이전 위치에 tag 요소를 넣어라


  // function onYouTubeIframeAPIReady() { 
  //   new YT.Player('player', { 
  //     videoId: '65KR3gSdY6I',
  //     playerVars: { 
  //       autoplay: true, 
  //       loop: true, 
  //       playlist: '65KR3gSdY6I',
  //     },
  //     events: {      
  //       onReady: function (event) {
  //         event.target.mute(); 
  //       }
  //     }
  //   });
  // }
let player;
  function onYouTubeIframeAPIReady() { 
    player = new YT.Player('player', { 

      events: {      
        onReady: function (event) {
          event.target.mute(); 
        }
      }
    });
  }


