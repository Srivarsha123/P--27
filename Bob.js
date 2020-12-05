class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:7.8
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("#46AED9");
      strokeWeight(2)
      stroke("#268DB7")
      ellipse(0, 0, this.radius);
      stroke(255)
      fill(255);
      ellipse(10, -5, this.radius-45)
      pop();
    }
  };