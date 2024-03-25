document.getElementById('time').innerHTML = new Date().toLocaleDateString();

// 배경색 버튼
function pink() {
  document.body.style.backgroundColor = 'pink';
}
function lightgoldenrodyellow() {
  document.body.style.backgroundColor = 'lightgoldenrodyellow';
}
function whitesmoke() {
  document.body.style.backgroundColor = 'whitesmoke';
}

// 사진
function name1() {
  document.getElementById('fig').src = 'img/me.png';
  document.getElementById('desc').innerHTML = '윤지현';
}
function number() {
  document.getElementById('desc').innerHTML = '92313489';
}
function showjs() {
  document.getElementById('fig').src = 'img/school.png';
  document.getElementById('desc').innerHTML = '정보보호학과 2학년';
}

//  숨기기
function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
