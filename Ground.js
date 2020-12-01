class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("#656565");
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}