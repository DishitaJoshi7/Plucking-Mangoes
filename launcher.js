class launcher {
    constructor(bodyD, myPoint) {
        var options = {
            bodyA: bodyD,
            pointB: myPoint,
            stiffness: 0.004,
            length: 1
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling);
        this.myPoint = myPoint
    }


    display() {
        if (this.sling.bodyA) {
            var posA = this.sling.bodyA.position;
            var posB = this.myPoint;
            line(posA.x, posA.y, posB.x, posB.y);

            
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(stone){
        this.sling.bodyA = stone;
    }
}