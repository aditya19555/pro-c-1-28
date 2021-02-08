class Stone{
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            density : 0.4
            
        }
        this.body = Bodies.rectangle(x, y,width,height,  options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width/9, this.height/9);
        pop();
      }
}