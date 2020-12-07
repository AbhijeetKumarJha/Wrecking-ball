class Ball {
    constructor(x, y,width, height, angle) {
      var options = {
          
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  