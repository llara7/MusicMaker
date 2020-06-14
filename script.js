window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const tads = document.querySelectorAll(".tads div");

  tads.forEach((tad, index) =>{
    tad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
  pads.forEach((pad,index)  =>{
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});