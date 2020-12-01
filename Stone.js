class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.image = loadImage("images/stone.png");
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}