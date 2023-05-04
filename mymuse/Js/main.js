const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// 타이핑 애니메이션
// new TypeIt("#hero", {
//   speed: 50,
//   startDelay: 900,
// })
//   .type("the mot versti", { delay: 100 })
//   .move(-8, { delay: 100 })
//   .type("s", { delay: 400 })
//   .move(null, { to: "START", instant: true, delay: 300 })
//   .move(1, { delay: 200 })
//   .delete(1)
//   .type("T", { delay: 225 })
//   .pause(200)
//   .move(2, { instant: true })
//   .pause(200)
//   .move(5, { instant: true })
//   .move(5, { delay: 200 })
//   .type("a", { delay: 350 })
//   .move(null, { to: "END" })
//   .type("le typing utlity")
//   .move(-4, { delay: 150 })
//   .type("i")
//   .move(null, { to: "END" })
//   .type(' on the <span class="place">internet</span>', { delay: 400 })
//   .delete(".place", { delay: 800, instant: true })
//   .type('<em><strong class="font-semibold">planet.</strong></em>', {
//     speed: 100,
//   })
//   .go();

  new TypeIt(".multipleStrings1", {
    strings: ["이고도 밴드와 쭉 함께 할 남성 베이시스트 모집중입니다! 연습 일정은 매주 화,목 밤에 홍대 뮤즈합주실에서 진행되며 공연 페이는 서울에서 공연 시 20, 지방은 더블입니다! 메일로 간단한 이력 보내주세요. 감사합니다!"],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt(".multipleStrings2", {
    strings: ["!광명중앙성결교회! 3부 예배 성실한 첼로 연주자님을 모십니다. 가능하신 분이 구해지면 시작 시기 조정 가능합니다! 페이는 4,5주 상관 없이 25입니다. 관심있으신 분께서는 성함, 나이, 연락처, 간단한 프로필과 함께 메일 주세요!"],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt(".multipleStrings3", {
    strings: ["여자 아이돌곡 가이드 보컬 구합니다! 보컬이나 케이팝 전공 하신분, 대학교 졸업 이상 아이돌 노래 많이 불러보셨거나 아이돌 가이드 경험 많으신 분들만 메일로 간단한 이력 보내주세요!"],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt(".multipleStrings4", {
    strings: ["수원광교 현악전문학원 !첼로! 강사 선생님 구합니다! 월, 수, 목 오후 레슨 시간은 유동적으로 변경 가능합니다! 현재 수강인원은 10명이고 페이는 70 학생 인원에 따라 페이가 올라갈 수 있습니다. (학원과 5:5)  01012222111로 연락주세요!"],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt(".multipleStrings5", {
    strings: ["4월28일 엠카운트다운 오전 7시 사전 녹화 여성 스트링 세션 10명 구합니다.(바이올린 or 비올라 7명 첼로3명) 의상은 올 화이트로 준비해 주셔야 하고, 오전 7시 촬영이기 때문에 6시30분 까지는 의상 메이크업 모두 마치고 스텐바이 해주셔야 합니다."],
    speed: 50,
    waitUntilVisible: true,
  }).go();
  new TypeIt(".multipleStrings6", {
    strings: ["발라드 녹음해주실 첼로 세션분 구합니다. 한 곡 녹음이며 인터루드에 솔로가 8마디 있고 어렵지 않습니다! 악보 따로 드리지 않아서 카피 해오셔야 하고 연주하기 불편한 부분은 코드 안에서 다르게 연주해주셔도 상관 없습니다! 페이는 20입니다! 연락주세요~"],
    speed: 50,
    waitUntilVisible: true,
  }).go();

const list1El = document.querySelector('.list1');
const list2El = document.querySelector('.list2');
const list3El = document.querySelector('.list3');
const list4El = document.querySelector('.list4');
const list5El = document.querySelector('.list5');

const music1El = document.querySelector('.music1');
const music2El = document.querySelector('.music2');
const music3El = document.querySelector('.music3');
const music4El = document.querySelector('.music4');
const music5El = document.querySelector('.music5');

list1El.addEventListener('mouseover', function(){
  music1El.style.display = "block";
  music2El.style.display = "none";
  music3El.style.display = "none";
  music4El.style.display = "none";
  music5El.style.display = "none";
});
list2El.addEventListener('mouseover', function(){
  music2El.style.display = "block";
  music1El.style.display = "none";
  music3El.style.display = "none";
  music4El.style.display = "none";
  music5El.style.display = "none";
});
list3El.addEventListener('mouseover', function(){
  music3El.style.display = "block";
  music1El.style.display = "none";
  music2El.style.display = "none";
  music4El.style.display = "none";
  music5El.style.display = "none";
});
list4El.addEventListener('mouseover', function(){
  music4El.style.display = "block";
  music1El.style.display = "none";
  music2El.style.display = "none";
  music3El.style.display = "none";
  music5El.style.display = "none";
});
list5El.addEventListener('mouseover', function(){
  music5El.style.display = "block";
  music1El.style.display = "none";
  music2El.style.display = "none";
  music3El.style.display = "none";
  music4El.style.display = "none";
});

// START
const listEls = document.querySelectorAll('.list');
const musicEls = document.querySelectorAll('.music');
listEls.forEach(function (listEl, index) {
  listEl.addEventListener('mouseover', function () {
    musicEls.forEach(function (musicEl) {
      musicEl.style.display = 'none';
    });

    musicEls[index].style.display = "block";
  });
});
// END

// list1El.addEventListener('mouseover', function(){
//   music1El.style.transition = ".5s";
// });
// list2El.addEventListener('mouseover', function(){
//   music2El.style.transition = ".5s";
// });
// list3El.addEventListener('mouseover', function(){
//   music3El.style.transition = ".5s";
// });
// list4El.addEventListener('mouseover', function(){
//   music4El.style.transition = ".5s";
// });
// list5El.addEventListener('mouseover', function(){
//   music5El.style.transition = ".5s";
// });

// 모달창 테스트
const inst1El = document.querySelector('.inst1')
const inst2El = document.querySelector('.inst2')
const inst3El = document.querySelector('.inst3')
const inst4El = document.querySelector('.inst4')
const inst5El = document.querySelector('.inst5')
const inst6El = document.querySelector('.inst6')
const inst7El = document.querySelector('.inst7')
const inst8El = document.querySelector('.inst8')
const inst9El = document.querySelector('.inst9')
const inst10El = document.querySelector('.inst10')
const inst11El = document.querySelector('.inst11')
const inst12El = document.querySelector('.inst12')
const inst13El = document.querySelector('.inst13')
const inst14El = document.querySelector('.inst14')
const inst15El = document.querySelector('.inst15')


const audio = document.getElementById("myaudio")

function myFunction() { 
  isSupp = audio.canPlayType("mp3");
  if (isSupp == "") {
    audio.src = "audio.mp3";
  } else {
    audio.src = "audio.mp3";
  }
  audio.load();
} 


inst1El.addEventListener('click', function(){
  audio.src="./sound/gt.mp3";
});
inst2El.addEventListener('click', function(){
  audio.src="./sound/pf.mp3"
});
inst3El.addEventListener('click', function(){
  audio.src="./sound/vn.mp3"
});
inst4El.addEventListener('click', function(){
  audio.src="./sound/drum.mp3"
});
inst5El.addEventListener('click', function(){
  audio.src="./sound/tp.mp3"

});
inst6El.addEventListener('click', function(){
  audio.src="./sound/가야금.mp3"
});
inst7El.addEventListener('click', function(){
  audio.src="./sound/ob.mp3"

});
inst8El.addEventListener('click', function(){
  audio.src="./sound/vc.mp3"

});
inst9El.addEventListener('click', function(){
  audio.src="./sound/태평소.mp3"

});
inst10El.addEventListener('click', function(){
  audio.src="./sound/fl.mp3"

});
inst11El.addEventListener('click', function(){
  audio.src="./sound/hn.mp3"

});
inst12El.addEventListener('click', function(){
  audio.src="./sound/sp.mp3"

});
inst13El.addEventListener('click', function(){
  audio.src="./sound/eg.mp3"

});
inst14El.addEventListener('click', function(){
  audio.src="./sound/eb.mp3"

});
inst15El.addEventListener('click', function(){
  audio.src="./sound/ep.mp3"

});


function showModal(videoId) {
  document.getElementById("modal").style.display = "flex";
  player.loadVideoById(videoId);
}
function hideModal() {
  document.getElementById("modal").style.display = "none";
  player.pauseVideo(videoId);
}

const mainMenu = document.querySelector('.main-menu');
const btnHam = document.querySelector('.btn-hamburger');
const btnx = document.querySelector('.btn-x')
const btnEl = document.querySelector('.button')


btnHam.addEventListener('click', function(){
  mainMenu.style.visibility = 'visible';
  btnEl.style.visibility = 'visible';
  btnHam.style.visibility = 'hidden';
  btnx.style.visibility = 'visible';
})
btnHam.addEventListener('click', function(){
})
btnHam.addEventListener('click', function(){
})
btnx.addEventListener('click',function(){
  mainMenu.style.visibility = 'hidden'
})
btnx.addEventListener('click',function(){
  btnEl.style.visibility = 'hidden'
  btnx.style.visibility = 'hidden'
  btnHam.style.visibility = 'visible'
})

