class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //stroke("#808080")
      //fill("#C4C4C4");
      //strokeWeight(2)
      //rect(pos.x, pos.y, this.width, this.height);
      stroke("black")
      fill("#2A2736");
      rect(pos.x-145, pos.y+155, this.height, this.width+10)
      rect(pos.x+145, pos.y+155, this.height, this.width+10)
      stroke("#2A2736")
      fill("#323250");
      rect(pos.x, pos.y+370, this.width, this.height);
      stroke("black")
      fill("#2A2736");
      rect(pos.x, pos.y+390, this.width, this.height);
    }
  };