let sound = document.getElementById('selectSound');
let homeContainer = document.getElementById('homeContainer');
let backArrow = document.getElementById('backArrow');
let menuOptionsContainer = document.getElementById('menuOptionsContainer');
let navOptions = document.getElementsByClassName('menuOptions');
let transitionBars = document.getElementsByClassName('transitionAnimation');
let barsArray = Array.from(transitionBars);
let birth = document.getElementById('birth');
let loop = document.getElementById('loop');

// Adds a fade-in to the main menu
setTimeout(function () {
  menuOptionsContainer.style.opacity = '1';
}, 1000);

// Triggers orbs animation
setTimeout(function () {
  birth.play();
}, 1500);
birth.addEventListener('ended', () => {
  birth.style.display = 'none';
  loop.style.display = 'flex';
  loop.play();
  loop.setAttribute('loop', 'true');
});

// Plays audio, css transition, and displays new content
function controlAudioNav() {
  sound.play();

  barsArray.forEach((bar) => {
    bar.style.transform = 'translateX(0)';
  });
  setTimeout(function () {
    barsArray.forEach((bar) => {
      bar.style.transform = 'translateX(-100vw)';
    });
  }, 2100);

  if (this.id === 'backArrow') {
    setTimeout(function () {
      homeContainer.style.display = 'flex';
    }, 2000);
  } else {
    setTimeout(function () {
      document
        .getElementById('backArrow')
        .addEventListener('click', controlAudioNav);
      homeContainer.style.display = 'none';
      this.style.display = 'flex';
      this.style.flex = '1';
    }, 2000);
  }
}

Array.from(navOptions).forEach((option) => {
  option.addEventListener('click', controlAudioNav);
});
