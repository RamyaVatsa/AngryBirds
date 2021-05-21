class Slingshot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.04
        }
        this.sling = Constraint.create(options);
        this.pointB=point2;
        World.add(world, this.sling);
    }
    display() {
       
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;     
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);    
        }
        
    }
    fly( ) {
    this.sling.bodyA=null;
    }
}