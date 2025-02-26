let sound = document.getElementById('selectSound');
let homeContainer = document.getElementById('homeContainer');
let navOptions = document.getElementsByClassName('menuOptions');
let transitionBars = document.getElementsByClassName('transitionAnimation');
let barsArray = Array.from(transitionBars);

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
}

Array.from(navOptions).forEach((option) => {
  option.addEventListener('click', controlAudioNav);
});
