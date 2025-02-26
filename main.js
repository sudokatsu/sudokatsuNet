let sound = document.getElementById('selectSound');
let menuOptionsContainer = document.getElementById('menuOptionsContainer');
let navOptions = document.getElementsByClassName('menuOptions');
let transitionBars = document.getElementsByClassName('transitionAnimation');
let barsArray = Array.from(transitionBars);

function controlAudioNav(event) {
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

setTimeout(function () {
  menuOptionsContainer.style.opacity = '1';
}, 1000);
