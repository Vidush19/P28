class Boy{
    constructor(x,y,width,height){

        this.image = loadImage("images/boy.png");
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.body = Bodies.rectangle(x,y,width,height,options);
        // World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,width/5, 625, 175, 175);
        pop();
    }
}