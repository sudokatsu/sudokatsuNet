let sound = document.getElementById('selectSound');
let navOptions = document.getElementsByClassName('menuOptions');

function controlAudioNav(event) {
  sound.play();
  event.preventDefault(); //will stop the link href to call the blog page

  setTimeout(function () {
    window.location.href = '/pages/about.html'; 
  }, 750);
}

Array.from(navOptions).forEach((option) => {
  option.addEventListener('click', controlAudioNav);
});
