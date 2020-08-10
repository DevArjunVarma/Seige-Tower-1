class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA=this.rope1.bodyA.position;
       var pointB=this.rope1.bodyB.position;

       stroke(225);
       strokeWeight(2);

       var Anchor1X=pointA.x;
       var Anchor1Y=pointA.y;

       var Anchor2X=pointB.x+this.offsetX;
       var Anchor2Y=pointB.y+this.offsetY;
       
       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        
    }
}