function enableCollision() { 
    program = "Collision"; 
    removeParticles();
    setup();
    loop();
}
  
function enableSplitting() { 
    program = "Splitting"; 
    removeParticles();
    setup();
    loop();
}
  
function enableDrawing(){
    program = "Drawing";
    removeParticles();
    setup();
    loop();
}      
  
function enablePlay(){
    let elem = document.getElementById("playPauseButton");
    if(elem.value == "Play"){
      start = true;
      elem.value = "Pause";
      elem.innerHTML = "Pause";
      paused = false;
      setup();
      loop();
    }
    else if(elem.value == "Pause"){
      start = false;
      elem.value = "Play";
      elem.innerHTML = "Play";
      paused = true;
      noLoop();
    }
}
  
function enableDraw(){
    let elem = document.getElementById("enableDrawButton");
    if(elem.value == "True"){
      canDraw = false;
      elem.value = "False";
      elem.innerHTML = "Enable Draw";
    }
    else if(elem.value == "False"){
      canDraw = true;
      elem.value = "True";
      elem.innerHTML = "Disable Draw";
    }
}

function resetSimulation(){
  paused = false;
  enablePlay();
  removeParticles();
  setup();
  loop();
}
   
function getAmount() { 
    return parseInt(document.getElementById("entityCount").value);
}

function getRadius(){
    return parseInt(document.getElementById("entityRadius").value);
}

function getColor(){
  return document.getElementById("entityColor").value;
}

function canCreateParticle(){
    if(particles.length < maxParticles){
      return true;
    }
    return false;

}

function removeParticles(){
    while(particles.length >= 1){
      particles.pop();
    }
}
  
function resizeWindow(width,height){

  let tooLarge = (wWidth > 650 && wHeight > 650);
  let tooSmall = (wWidth < 150 && wHeight < 150);

  if(tooLarge && width > 0) { width *= -1; height *= -1; }
  if(tooSmall && width < 0) { width *= 1; height *= 1; }

  wWidth += width;
  wHeight += height;
  resizeCanvas(wWidth,wHeight);
  centerCanvas();

}