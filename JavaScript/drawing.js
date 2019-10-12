function drawing_draw(){
    background(220);
    let radius = getRadius();
    let color = getColor();
    if(mouseIsPressed){
      if(canCreateParticle() && start){
        particles.push(new Particle(radius,color,mouseX,mouseY));
      }
    }
    for(let i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].draw();
      for(let j = i+1; j < particles.length; j++){
        if(particles[i] == particles[j]) {}
        else if(particles[i].collidesWith(particles[j])){
          particles[i].xVel *= -1;
          particles[i].yVel *= -1;
          particles[j].xVel *= -1;
          particles[j].yVel *= -1;
        }  
      }
    }
}
  
function drawing_setup(){}