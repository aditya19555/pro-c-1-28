class Ch{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
   pointB: pointB,
    length:5,
stiffness:0.2

}


this.ch=Constraint.create(options)
World.add(world,this.ch)
    }
display(){
    if(this.ch.bodyA){
        var pointA = this.ch.bodyA.position;
            var pointB = this.pointB;}
    var pointA=this.ch.bodyA.position;
    var pointB=this.ch.pointB
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}