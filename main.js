let sound = document.getElementById('selectSound');
let homeContainer = document.getElementById('homeContainer');
let backArrows = document.getElementsByClassName('backArrow');
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

function pageTransition() {
  barsArray.forEach((bar) => {
    bar.style.transform = 'translateX(0)';
  });
  setTimeout(function () {
    barsArray.forEach((bar) => {
      bar.style.transform = 'translateX(-100vw)';
    });
  }, 2100);
}

function controlBackPress() {
  const selected = document.getElementById(this.innerHTML);
  sound.play();
  pageTransition();
  setTimeout(function () {
    homeContainer.style.display = 'flex';
    selected.style.display = 'none';
  }, 2000);
}

// Plays audio, css transition, and displays new content
function controlAudioNav() {
  const selected = document.getElementById(this.innerHTML);

  sound.play();
  pageTransition();

  setTimeout(function () {
    homeContainer.style.display = 'none';
    selected.style.display = 'flex';
  }, 2000);
}

function openPdf() {
  sound.play();
  window.open('/assets/resume.pdf');
}

Array.from(backArrows).forEach((arrow) => {
  arrow.addEventListener('click', controlBackPress);
});

Array.from(navOptions).forEach((option) => {
  if (option.innerHTML === 'Resume') {
    option.addEventListener('click', openPdf);
  } else {
    option.addEventListener('click', controlAudioNav);
  }
});
