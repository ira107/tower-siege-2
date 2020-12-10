class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
       World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(pointB){
        this.sling.bodyA=pointB
           }

    display(){
    
      if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("white")
           
           
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
            }
            
               }

}