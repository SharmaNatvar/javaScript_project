addEventListener("keydown", function (e) {
  console.log();
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  box.classList.add("play");

//   setTimeout(function () {
//     box.classList.remove("play");
//   }, 0.06);
});

function removeTransitionend(e){
if(e.propertyName !== 'transform') return;
this.classList.remove('play')
}

const keys = document.querySelectorAll('.box')
keys.forEach(key => key.addEventListener('transitionend' , removeTransitionend))
// console.log(keys);