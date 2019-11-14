function splitting_draw(){
    background(220);
    let radius = getRadius();
    if(mouseIsPressed){
      if(canCreateParticle() && canDraw && start){ 
        particles.push(new Particle(radius,'black',mouseX,mouseY));
      } 
    }
    for(let i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
        for(let j = i+1; j < particles.length; j++){
          if(particles[i].collidesWith(particles[j])){
            if(particles[i].splitsWith(particles[j])){
              if(canCreateParticle()){
                let radius = (particles[i].radius * 0.25) + (particles[i].radius * 0.25);
                let x = particles[i].x + particles[i].radius;
                let y = particles[i].y + particles[i].radius;
                particles[i].radius *= 0.75;
                particles[j].radius *= 0.75;
                particles.push(new Particle(radius,'red',x,y));
              }
            }
            particles[i].xVel *= -1;
            particles[i].yVel *= -1;
            particles[j].xVel *= -1;
            particles[j].yVel *= -1;
          }  
        }
    }
}
  
function splitting_setup(){
    let amount = getAmount();
    let radius = getRadius();
    let color = getColor();
    for(let i = 0; i < amount; i++){
      particles.push(new Particle(radius,color));
    }
}