let wWidth = 600;
let wHeight = 600;

let cnv;

let particles = [];
const maxParticles = 300;

let start = false;
let paused = false;
let canDraw = false;
let program = "Splitting";

function draw(){
  switch(program){
    case "Collision":
      collision_draw();
      break;
    case "Splitting":
      splitting_draw();
      break;
    case "Drawing":
      drawing_draw();  
      break;
    default:
      break;
  }
}

function setup(){
    cnv = createCanvas(wWidth,wHeight);
    centerCanvas();
    if(!paused && particles.length == 0){
    if(start){
        switch(program){
          case "Collision":
            collision_setup();
            break;
          case "Splitting":
            splitting_setup();
            break;
          case "Drawing":
            drawing_setup();
            break;
          default:
            break;
        }
    }}
}

function centerCanvas(){
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2 ;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

