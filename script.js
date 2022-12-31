let keys = document.querySelectorAll('[data-code]');

function playSound(event) {
  keys.forEach((key) => {
    let keyCodeAttr = key.getAttribute('data-code');
    if (event.code == keyCodeAttr) {
      let playingKey = document.querySelector(`[data-code=${keyCodeAttr}]`);
      let soundName = playingKey.lastElementChild.innerText;
      let url = `/sounds/${soundName}.wav`;
      let audio = new Audio(url);
      audio.play();
      addClass(playingKey);
    }
  });
}

function addClass(playingKey) {
  playingKey.classList.add('play');
}

function removeClass() {
  keys.forEach((key) => {
    key.classList.remove('play');
  });
}

document.addEventListener('keydown', playSound);

document.addEventListener('keyup', removeClass);
