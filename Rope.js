class Rope {
    constructor(bodyA, pointB, offSetX, offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            pointB: {x:this.offSetX, y:this.offSetY},
            stiffness: 1,
            length: 200
        }
        this.pointB = pointB
        this.rope = Constraint.create(option)
        World.add(world, this.rope)
    }
 
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(2.5)
        stroke("black")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}