let min = 1,
  max = 10,
  winningNum = getWinningNum(min, max),
  guessLeft = 4;

const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  button = document.getElementById('guess-btn'),
  Theguess = document.getElementById('guess-input'),
  message = document.querySelector('.message'),
  lleft=document.querySelector('.left-num');

minNum.textContent = min;
maxNum.textContent = max;
lleft.textContent=guessLeft;
num=0;

button.addEventListener('click', re);
//play again listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className == 'play-again') {
    window.location.reload();
  }
});

// the random number function
function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function re(e) {
  document.getElementById('pic').style.display = 'block';
  const guess = parseInt(Theguess.value);
  if (isNaN(guess) || guess < min || guess > max) {
    // לא רשם מספר היגוני
    num = 1;
    setMessage('plesae enter better You piece', 'red');
    
  } else {
    setMessage('');
    if (guess === winningNum) {
      // game over won
      Theguess.disabled = true;
      num = 2;
      setMessage('nice man the number was ' + winningNum, 'green');
      Theguess.style.borderColor = 'pink';
      button.value = 'Play again?';
      button.className = 'play-again';
    } else {
      guessLeft = guessLeft - 1;
      if (guessLeft <= 0) {
        // game over lost
        num = 4;
        lleft.textContent=guessLeft;
        setMessage(
          'you lost you idiota  the right number was ' + winningNum,
          'red'
        );
        Theguess.disabled = true;
        button.value = 'Play again?';
        button.className = 'play-again';
      } else {
        // game conines answer wrong
        document.getElementById('pic').style.display = 'none';
        lleft.textContent=guessLeft;
        lleft.style.color='red';
      }
    }
  }
}

function gameOver(won, msg) {}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;

  // תמונה
  if (num == 1) {
    // לא רשם כלום
    document.getElementById('imageid').src = 'imgg/wtf.png';
  }
  // ניצחתה
  if (num == 2) {
    document.getElementById('imageid').src = 'imgg/gamble1.jpg';
  }
  // לא נכון
  if (num == 3) {
    document.getElementById('pic').style.display = 'none';
  }
  // מפסיד
  if (num == 4) {
    document.getElementById('imageid').src = 'imgg/lose.jpg';
  }
}
