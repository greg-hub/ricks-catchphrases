// mobile & tablet touch playing function

 const dubDub = document.getElementById('dubDub');
 const adis = document.getElementById('aids');
 const lickLick = document.getElementById('lick');
 const ruber = document.getElementById('ruber');
 const sumJump = document.getElementById('sumJump');
 const tappy = document.getElementById('tappy');
 const shumShum = document.getElementById('shumShum');
 const noJumping = document.getElementById('noJumping');
 const grassss = document.getElementById('grassss');
 const waaaay = document.getElementById('waaaay');

// dubDub
  dubDub.onclick = function(){
  let sound  = document.createElement("audio");
  sound.src="./sounds/dubdub.wav";
  sound.autoPlay=false;
  sound.preLoad=true;
  sound.play();
 }

//aids
 aids.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/aids.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//licklick
 lickLick.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/licklick.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//ruber
 ruber.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/rubberbaby.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//sumJump
 sumJump.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/sumjump.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//tappy
 tappy.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/ricktick.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//shumShum
 shumShum.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/dipdop.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//noJumping
 noJumping.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/nojumping.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//grassss
 grassss.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/grass.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}

//grassss
 waaaay.onclick = function(){
 let sound  = document.createElement("audio");
 sound.src="./sounds/news.wav";
 sound.autoPlay=false;
 sound.preLoad=true;
 sound.play();
}


// keyboard audio playing function
function playKey(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return; // stop function
      audio.currentTime = 0; // rewind selector!
      audio.play();
      key.classList.add('playing');
  }

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if not transform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playKey)
