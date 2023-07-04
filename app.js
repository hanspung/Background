// alert('hi')
//태그 선택은 querySelector는 css, getElementById는 id
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')

// 색입력 color1과 color2의 색을 선택했을 때 두 색을 섞어서 표시하는 (body에) 함수
function shuffle() {
    const c1 = color1.value; //선택한 색
    const c2 = color2.value; // 선택한 색
    //자바스크립트의 문자열 안에 변수 넣기 ''벡틱 따옴표'
    body.style.background = `linear-gradient(to right, ${c1} , ${c2})`;
    console.log(body.style.background)
    css.innerText = body.style.background + ";"
}

color1.addEventListener('change', shuffle)
color2.addEventListener('change', shuffle)

// //이벤트 리스너 사용
// body.addEventListener('click', 함수이름);

// function click() {
//     alert('클릭');
// }