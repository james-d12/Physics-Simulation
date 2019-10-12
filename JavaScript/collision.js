function collision_draw(){
    background(220);
    let radius = getRadius();
    let color = getColor();
    if(mouseIsPressed){
      if(canCreateParticle() && canDraw && start){
        particles.push(new Particle(radius,color,mouseX,mouseY));
      }
    }
    for(let i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].draw();
      for(let j = i+1; j < particles.length; j++){
        if(particles[i].collidesWith(particles[j])){
          particles[i].xVel *= -1;
          particles[i].yVel *= -1;
          particles[j].xVel *= -1;
          particles[j].yVel *= -1;
        }  

      }
    }
  print("draw");
}
    
function collision_setup(){
  let amount = getAmount();
  let radius = getRadius();
  let color = getColor();
  for(let i = 0; i < amount; i++){
    particles[i] = new Particle(radius,color);
  }
}