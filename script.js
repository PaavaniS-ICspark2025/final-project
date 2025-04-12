let easyscore = 0;
let hardscore = 0;
let isGameOver = false;







const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
let score = 0;

function run(){
    const i = Math.floor(Math.random() * holes.length);
    const hole = holes[i];
    let timer = null;

    if (isGameOver) {
        gameOver();
        return;
    }

    const img = document.createElement('img');
    img.classList.add('mole');
    img.src = 'imgs/mole.png';

    img.addEventListener('click', function() {
        img.style.pointerEvents = "none";
        score += 10;
        scoreEl.textContent = score;
        img.src = 'imgs/mole-whacked.png';
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img);
            run();
        }, 500);
    });

    hole.appendChild(img);

    timer = setTimeout(() => {
        hole.removeChild(img);
        run();
    }, 1500);
}
run();

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active');
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
})


var timeLeft = 30;
var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        isGameOver = true;
      } else {
        timeLeft--;
        console.log(timeLeft);
      }
    }

function gameOver() {

}

countdown();