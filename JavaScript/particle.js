const gravity = 0.00981;
const damping = 0.75;

class Particle{

    constructor(radius, color,
        x=random(wWidth-radius),y=random(wHeight-radius),
        xVel=random(-5,5), yVel=random(-5,5)){
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;   
        this.xVel = xVel;
        this.yVel = yVel;
    }

    print(){
        print("x:" + this.x);
        print("y:" + this.y);
        print("x vel:" + this.xVel);
        print("y vel:" + this.yVel);
        print("energy:" + this.energy);
    }

    collidesWith(otherP) {
        let distance = dist(this.x, this.y, otherP.x, otherP.y);
        let totalRadius = (this.radius + otherP.radius) / 2;
        if (distance < totalRadius || distance == 0) {
          return true;
        }
        return false;
    }
    
    splitsWith(otherP){
        let canSplit = (this.radius >= 5) && (otherP.radius >= 5);
        if(canSplit){
          return true;
        }
        return false;
    }

    update() {
        let xBound = this.x + (this.radius/2);
        let yBound = this.y + (this.radius/2);

        this.yVel += gravity;

        if(xBound > wHeight ||
          this.x <= (this.radius/2)) {
          this.xVel *= -1;
          this.xVel *= damping;
        }

        if(yBound > wHeight ||
          this.y <= (this.radius/2)) {
          this.yVel *= -1;
          this.yVel *= damping;
        }

        this.x += this.xVel;
        this.y += this.yVel;

    }

    draw() {
        stroke(255);
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
    }
}


function createParticle(amount,mass,color,radius){
    let particles = [];
    for(let i = 0; i < amount; i++){
    
      particles[i] = new Particle(mass,radius,color);
    
    }
    return particles;
}

function removeParticle(particle){
    for(let i = 0; i < particles.length; i++){
        if(particles[i] == particle){
            particles.pop(i,particle);
        }
    }
}